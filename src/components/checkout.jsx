import { toast } from "react-toastify"
import { usePostData } from "../hooks/DataFetchHook"

const key_id = process.env.NODE_ENV == "production" ? process.env.RAZORPAY_KEY_ID : process.env.RAZORPAY_KEY_ID_TEST
const key_secret = process.env.NODE_ENV == "production" ? process.env.RAZORPAY_KEY_SECRET : process.env.RAZORPAY_KEY_SECRET_TEST

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

function Checkout() {
    const { handleSubmit } = usePostData()
    const handler = usePostData().handleSubmit
    async function displayRazorpay() {
        try {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
            if (!res) {
                alert('Razropay failed to load!!')
                return
            }
            let data = await handleSubmit(null, `/auth/checkout`, { amount: 9, "currency": "USD", });
            if (data) {
                const { amount, id, currency } = data;  // Ensure data includes id
                const options = {
                    "key": key_id,
                    "amount": amount,
                    "currency": currency,
                    "name": "shivam",
                    "description": "Test Transaction",
                    "image": "https://example.com/your_logo",
                    "order_id": id,  // Use the id obtained from the backend response
                    handler: function (response) {
                        console.log("postdata", response)
                        alert(response.razorpay_payment_id);
                        alert(response.razorpay_order_id);
                        alert(response.razorpay_signature)
                        const paymentData = {
                            order_id: id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                        };
                        handler(null, `/auth/checkout/verify`, paymentData).then((res) => {
                            console.log({ res });
                            toast.success("Payment Successful");
                        }).catch((err) => {
                            console.log(err);
                            if (err.response.data) {
                                toast.error(err.response.data.message)
                            } else {
                                toast.error(err.message)
                            }

                        });
                    },

                    "notes": {
                        "address": "Razorpay Corporate Office",
                        "merchant": "Razorpay Software Private Limited",
                        "email": "shivam13jun@gmail.com",
                        "contact": "87459784241",
                        "order_id": id,  // Ensure order_id is set correctly
                    },
                    "prefill": {
                        "name": "Gaurav Kumar",
                        "email": "shivam13jun@gmail.com"
                    },
                    "theme": {
                        "color": "#3399cc"
                    },
                };
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } else {
                toast.error("Failed to create order");
            }



        } catch (error) {
            if (error.response) {
                console.log("Errrrrr", error.response.data);
                if (error.response.data) {
                    toast.error(error.response.data.message)
                } else {
                    toast.error(error.message)
                }

            }
        }
    }

    return (
        <div className="App">
            <header className="App-header">

                <button
                    onClick={displayRazorpay}
                >
                    Purchase Plan
                </button>
            </header>
        </div>
    );
}

export default Checkout;