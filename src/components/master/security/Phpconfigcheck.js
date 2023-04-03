import React, { Component } from "react";
import Headers from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import DataTable from 'react-data-table-component';
import data from './data.json';
const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Phone',
        selector: 'phone',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'DOB',
        selector: 'dob',
    },
];
export default class Phpconfigcheck extends Component {

    render() {
        return (
            <div>
                <Headers />
                <Menu />
                <div className="content-wrapper" style={{ minHeight: 511 }}>
                    {/*CONTENT CONTAINER*/}
                    {/*===================================================*/}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 ">
                                        <i className="fab fa-php" /> PHP Configuration Checker
                                    </h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="dashboard.php">
                                                <i className="fas fa-home" /> Admin Panel
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            PHP Configuration Checker
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Page content*/}
                    {/*===================================================*/}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary card-outline collapsed-card">
                                        <div className="card-header" data-card-widget="collapse">
                                            <h3 className="card-title">PHP Information</h3>
                                            <div className="card-tools">
                                                <button
                                                    type="button"
                                                    className="btn btn-tool"
                                                    data-card-widget="collapse"
                                                >
                                                    <i className="fa fa-plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body" style={{ display: "none" }}>
                                            <div className="table table-bordered table-responsive table-hover">
                                                <div className="center">
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <td>
                                                                    <a href="http://www.php.net/">
                                                                        <img
                                                                            border={0}
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAABACAYAAAA+j9gsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAD4BJREFUeNrsnXtwXFUdx8/dBGihmE21QCrQDY6oZZykon/gY5qizjgM2KQMfzFAOioOA5KEh+j4R9oZH7zT6MAMKrNphZFSQreKHRgZmspLHSCJ2Co6tBtJk7Zps7tJs5t95F5/33PvWU4293F29ybdlPzaM3df2XPv+Zzf4/zOuWc1tkjl+T0HQ3SQC6SBSlD6WKN4rusGm9F1ps/o5mPriOf8dd0YoNfi0nt4ntB1PT4zYwzQkf3kR9/sW4xtpS0CmE0SyPUFUJXFMIxZcM0jAZ4xrKMudQT7963HBF0n6EaUjkP0vI9K9OEHWqJLkNW1s8mC2WgVTwGAqWTafJzTWTKZmQuZ/k1MpAi2+eys6mpWfVaAPzcILu8EVKoCAaYFtPxrAXo8qyNwzZc7gSgzgN9Hx0Ecn3j8xr4lyHOhNrlpaJIgptM5DjCdzrJ0Jmce6bWFkOpqs0MErA4gXIBuAmY53gFmOPCcdaTXCbq+n16PPLXjewMfGcgEttECeouTpk5MplhyKsPBTiXNYyULtwIW7Cx1vlwuJyDLR9L0mQiVPb27fhA54yBbGttMpc1OWwF1cmKaH2FSF7vAjGezOZZJZ9j0dIZlMhnuRiToMO0c+N4X7oksasgEt9XS2KZCHzoem2Ixq5zpAuDTqTR14FMslZyepeEI4Ogj26n0vLj33uiigExgMWRpt+CGCsEePZqoePM738BPTaJzT7CpU0nu1yXpAXCC3VeRkCW4bfJYFZo6dmJyQTW2tvZc1nb719iyZWc5fmZ6Osu6H3uVzit52oBnMll2YizGxk8muFZLAshb/YKtzQdcaO3Y2CQ7eiy+YNGvLN+4+nJetm3bxhKJxJz316xZw1pbW9kLew+w1944XBEaPj6eYCeOx1gqNe07bK1MwIDbKcOFOR49GuePT5fcfOMX2drPXcQ0zf7y2tvbWVdXF/v1k2+yQ4dPVpQ5P0Um/NjoCX6UBMFZR6k+u7qMYVBYDIEqBW7eXAfPZX19zp2/oaGBHysNMGTFinPZik9fWggbI5Omb13zUDeB3lLsdwaK/YPeyAFU0i8Aw9/2Dwyx4SPjFQEYUlf3MTYw4Jx7CIVCbHR0oqIDNMD+FMG+ZE0dO/tsHlvAWnYS6H4qjfMC+Zld/wg92/tuv2WeeYT87j+H2aFDxysGLuSy+o/z49DQkONnmpqa2MjRyoYsZOXKGnb5Z+vZqlUrxUsAvI9At/oK+elnBpoNw+Dai9TekSMxDrgSh0KrSYshTprc2NhoRf1JtlikqirAVl98AddsSavDBDrsC+QdT7/TSoB344tzOZ39+70RbporVerqasyw1MEnC8iV6I9VTDi0uqbmfPFSq2W+gyUHXuEdb3WR5rab5jnD3i/BNMN8ChNaqsTiKa55KmBWX+Tuj0XQdQVF307nhTH0CPls+O0UPbaT5TQG/8qX68u6LpV67LQ6dNknaYgaYyPDx2TzvYGCsnhRkH8b/rsF2GDj1MCInkvxvRjOuCUlipWD/zrKx7ZOwBF0vfSSM2ShyaqAAOC1Nw+zt9/5YNbrN1zfwIdpfgnqebv/A6pnWAn4qlW1HPgHQ6OeoG3N9RO/+StMdDtmV2LxJPfBpQCGfwTgrVu38jFrKaW2tpZt2LCBdXR0sEgkwhv21u9cxQsyW3ZB1+DgoOM54btU6tu8eTPr6elhy5fr7IZNDey+e76e9/fCLcAllHpdKKinpaUlX8+111xB9VzNrYxqUAY/XVVVJYMOekLu2fFGM8VWYQRYiYkU9bD4vPlHFYnH4/zvkb1CgwACHgMoUpdyw3sFXcXUh4YHaNSHDqaxdL5jwVTXBpeXVY9oF3RcUQ+O09NT7Cayfld+4RJlP42gTIq8w66Qf/X4a6FTSSMMDcaE/NhYecMM+MdyG90OAhodWoAGkTUaSZByO5WdiA4GqwStrrM6k5vFKEXQserr63l7oR5V0NBojKctaSZtbneErOtGmFxwkGewjk0UzpCUlJSIRqMcjN8CkHLDqyRByq0PEGBBhDmdj7rQVujAaLfrrlk7xyW5gUaxpEtOmOQDr0e799NYmDVBi0+OT7FcbsaXxEQk8qprEBQMBm0vVKUBRcNjskFE8W71lSt79uzhda1d6w4ZGTUUp3NWAQ3TvW/fPvbVq+rZH/ceULOcF1/I06CY3QJohCCzNJnYdgEwwvpUKuNbUsLNpO3evZtfSGHp7+/nS2pw3LLFPVWLoA5yHQUtXvXFYjH+vU4F5yOibzsRUL38MTqC3XWh8GCWziMcDjt2BNEZUIfoUOpJkwvziT3S5ua8Jj/4yD5E0yERbPkhKv4RF4mhkN1wCMHN2rWfYZ2dnWz9+vXchNkJzBoaQ8Bxqg91wWo41YdO2dzczD+3bt06Rw0rBG4nOF8oi9M0Jsw9OgLqQ124BifLgeuHyVbN0NXUrODBmDWxgRR0pNrUYqMNgDOZGZbNzvgCuc4j0kX+GPJ2//CcMagQmKkbrm/knwVEp++SIXulM1+nhj9AY207QRDnpsnye24WA59DkuPlV/5j+z5eB2hE0W1tbTyQdNJmDpksRzFp2E9csFJAboRvDvz8gZdJgw2ek55KZphfAv+Inu8UdKnmkEUHQK93EjEZ4Rbkifq8JiactEpYAy9Nli2Gm6CjIZPn1qlKFWizleOG3BIwdKNZ+KRMxr9VHKvr1NKLXo2BhlAVFRPq1qlWW6MBr3NWyY2rTGXO5ySJlN9uDuiGsV7XTVPtl8CHYGizf/9+V5Om0hAwVV4ahuU8qia03HP26kyqFkMOTudDzjs/P/QKBUiBYa5ZNucfZJUkCG/0IhpCxYyqBF3lnLOII8q1GKqdStQ3rTh5MStwXX5O/nE1metGQzPHUH6JatA1OppQ8u1eUbpX44tO4GY5vM5Z9sduFgOfG1GwUOK6VFzaSAmrWCSfzGCuuT/O+bi6QwRdTtqXN2keJ4/ejgkJ5HedRARkbkGe6ARulgMWQ+Wc3cDAWohhoZdcue7ifJ7crfP6Me8dELd0Mv8U2begC2k9SHd3t+NnNm7cqKwRbiYUkykqvlZlmOYVLIq5bHRep46JzotOc9BhuFc0ZHGLph+CJIaXr1FZSIfxsdBiN1+LpALEK2By61Aqs0rwtV7DNBU3BMCYixYTLU6C8bM5hBwum0k1mesBpmPtlj+qXFenFsAgCVLon9DYeIxUnmh05HCdBIkCVRP6ussiepVZJZXIutCHwt2I0YGY2Kiz3AIyeG5aLNooVULQBbHy1/nAK2oEtEanheil+GO3aFg0FnwSilNC4q6OrXzywc0XCy1WMaFu/tgrCBLRuWpHuP+n1zqmRXFN0GAnwKgHeW1E1C/86UDJHFKptATZMPZTafbLXHtN3OPixKRC4ev4GwB2Gy6JxhQNEYul+KoKp79RMaGqKzy9ovzt27c7pidVZtYAGJMYOP7u6bdK1mLI1GQ+/ogSZBahwKuLO2jSZt0odw65xrUhAMNrZskLsGiIXz72F3bTjV+ixvtbWcMQr3NWCbog5VyXAIy63PLrqpJITIqHkcD9P7suSiYbG53wvTLKDbr8WBbjZqIF4F3PD3ItRn1eQd5CBF3lCM5RAIYfVp0/dgZ8SvbJ2/l8MmlvNw+8qJTjm+drWQwaAXO9KMuWncc1GBMXKkGeV/pU5ZxFIsTvzovOCu3HvDnOE7NTu3rLr+PE8fy6+IEX9947YM4n/+LbPT/88R8QqoYAuVSDrZLFKcYso2AcLBIeGDPu6h3M+yqvIE/4Y6w4LdUfi+jcr86L75KvC9+PcbVfd1hCi6U7Innwk1/+Q5rcoetsdyBg3s9aCmivBsNFifGfG9zCJUFiztmpEXAbqhMgr6SLWBPu9R1enRfm1ktrC6cVYWH+/Mqg43x6sYK1edaCex7vkRZHZkF+6P6NkXvvi/TpLNBUaqTtdcsoLtIrVTcem2EHDh7m2uq0ikMINBvafOmazzt+BkGMW9CF70DndPsOaJqb38Y1oXjdCYHOiqwbPofrKid6thMAlnxxPtMy6w4K0ubNhq73U5wd5PtVleCTd+50D2CEafLloqixyv0ufMcOGq64CVaMYN2119gfAdPpuscKOxWgCMDwxfm0pvzBhx9siRLoFt3ca7Ikf+x2yygaYzHdTSi7IT9y8fMJ2Lpdhg+ZCPA2+f05d1A88mBLHzQaoA1dL6ohVLJGi+1uQj8XQMyHIMgaGT6eDxuozMkD294LRaB7CPI27DLHQSskSFRvGa30O/zndF4fF0DMhwa//9//iZ2DcILqN7xBHn1oUweNn7eJ3WO9QHvdMlrMsphKEj8XQPgpuHVVMtGOgF0hC9CGTqbb2kHOzXx73aKiuiymEv2x22ICMYYeWSALBQ7RQ0fkoZIr4DnRtS3ohzf1dNzTG9d0PcwMLahZO8UyKTMm38wteratSVtkplq4oWj0PcfrEinPhYg14H+hvdIwCVs1bvb6O+UBMYFGl90d0LRGLRDgoHEUwYnXDniQStocTVUwfPLaKQGA/RoWOmkvtnsaG8unK+PWMKlH5e+Lznp03N27RdO0TkxmYNZKszYBlyfI3RpjsQkmMOo8ls4Wsx1EKcEVAEvayyNoeRzsO2RI+93PNRLesGYtNpBhL4l/prlgZz5ob0mbtZVFhWC301d0EuQgAHPgS7D9hssTHKyMbRfLptF213NBDRuoaqxNA2yh2VUBDnxJ1M1yRW6gOgt2x64gqXK7ht1yOWyW1+wl7bYXvhUygQXgit4KuVDuBGzSbA2bmmtayNzpRgJOGu7XosHFChZzvrGTiUKt5UMiVsmbmtsCb3+2lZmwm3hFNsA/CiYdKyfhYx3Aws8urp8nsJM72naGCG8zYwZMecjk/WHVVRbsMwU6tBVQsWJS2sNDlrgVTO0RE/vzKQtuN2+/85k5PxlUaL75D3BZwKss+JUqSFRAO/F7Eqlkmj+2gbrgYE8rZFluu+P3pOGsyWCG/Y9/GR8exC+vYfc5flxgzRdDGsDEz/8AJsxwQcBUKPCtmKOMFJO8OKMgF8r3b3sKkAm69TN+2OZCAm5ID/g9XPypwX29ufWgudq0urrKes/8nPkxgy1bdg6z/or/SFc2mzV/xs+6HwySTmdYJp2dpaWKEregYrVfn9/B0xkD2U6+e+sOaHqImTfLrycUOIZM1hJwC3oemPXbi/y5PnsrJ136bUa8pxu69BklmANWwDRkgR1wmwVaglyi3Nz6JLQ+ZG5NxQsgNdAhmIfJN7wxgoWg9fxzPQ+c/g9YAIXgeUKCyipJO4uR/wswAOIwB/5IgxvbAAAAAElFTkSuQmCC"
                                                                            alt="PHP logo"
                                                                        />
                                                                    </a>
                                                                    <h1 className="p">PHP Version 7.4.8</h1>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">System </td>
                                                                <td className="v">
                                                                    Linux freeweb4.byetcluster.com
                                                                    2.6.32-896.16.1.lve1.4.54.el6.x86_64 #1 SMP Wed May 2
                                                                    07:43:19 EDT 2018 x86_64{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Server API </td>
                                                                <td className="v">Apache 2.0 Handler </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Configuration File (php.ini) Path{" "}
                                                                </td>
                                                                <td className="v">/etc/php70 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Loaded Configuration File </td>
                                                                <td className="v">/etc/php70/php.ini </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Scan this dir for additional .ini files{" "}
                                                                </td>
                                                                <td className="v">(none) </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Additional .ini files parsed </td>
                                                                <td className="v">(none) </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zend Extension Build </td>
                                                                <td className="v">API320190902,NTS </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PHP Extension Build </td>
                                                                <td className="v">API20190902,NTS </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zend Signal Handling </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zend Memory Manager </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zend Multibyte Support </td>
                                                                <td className="v">provided by mbstring </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">IPv6 Support </td>
                                                                <td className="v">disabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">DTrace Support </td>
                                                                <td className="v">disabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Registered PHP Streams</td>
                                                                <td className="v">
                                                                    https, ftps, compress.zlib, php, file, glob, data,
                                                                    http, ftp, phar, zip
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Registered Stream Socket Transports
                                                                </td>
                                                                <td className="v">
                                                                    tcp, unix, udg, ssl, tls, tlsv1.0, tlsv1.1, tlsv1.2,
                                                                    tlsv1.3
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Registered Stream Filters</td>
                                                                <td className="v">
                                                                    zlib.*, convert.iconv.*, string.rot13, string.toupper,
                                                                    string.tolower, string.strip_tags, convert.*,
                                                                    consumed, dechunk
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="v">
                                                                <td>
                                                                    <a href="http://www.zend.com/">
                                                                        <img
                                                                            border={0}
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAvCAYAAADKH9ehAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEWJJREFUeNrsXQl0VNUZvjNJSAgEAxHCGsNitSBFxB1l0boUW1pp3VAUrKLWKgUPUlEB13K0Yq1alaXWuh5EadWK1F0s1gJaoaCgQDRKBBJDVhKSzPR+zPfg5vLevCUzmZnwvnP+k8ybN3fevfff73/vBAJTHxc+khL5kr6T1ODk5nAgTRTWloghFVtEg/zfh2PkSvq9pJGSKiX9SdKittbJoD/PSYkrJD0vKeB4IsNNotfuUtHk/CM+IvijpF9KGiDpGEkLJZ3lC7qPeKKTpD9IWiDpUOfWPCi61ZeLvD2VIhTwp9QlTjK5NsIXdB/xxHmSpvD/OucWPSAyQw2+LfeG1SbXVra1Tqb785xUaNdMel0g7Iu5V1zPv6dJqpD0kKR/+ILuI55o8oeg1bFT0kWSOkraQxK+oPvw0TZR3ZY758foyQXf//ZxUFh0Q/GEfNf9gHkaJ6m7pHJJSyTt9tnXhxtBR2EGlnHCMbZMaHuHzX19JZ0u6VRJh0k6hM+BpMjnklZIelPSNhff3V5StkNlEWBMFm+3LcC+BW3GuZP2GvfmiEiCCMUzxZIKRGSt9zeML/fdGAW9JB3O8c6SlMZ+b5f0qaQiF7EpnieXY1auvZfG7zhSUk8RSS428F7M5xfsh1eAV/vxOzoq16sklZBqbdpo5H2qDPRQXoP3Ki0+20FSFyrZUgt+Rt/7KH2vZb8/t/iMG2Sy/0dI6sbvgHGoV8a3xErQb5Q0iTfHCplkzlkW7w+VNF3ST7QJUzFK0pVkDFiw+yV95uC7r5Z0k3CW2ApwIkrJ9B9IelfSh2SIlqC/pDFUZAVk0rQoMhk2GYswx+AtWvMKPtcyEckW37pPwsIHNAuBniDpYhEpBMmJwvibJL0gIlVh39r0C8UlczkXQ/mM6OtEzuf3RfPVAxUY47f5PStcGKPxpOMldbbxiBptPMavJX1PuQ/P/olyz12S7rD4PLyqBTQ8gyXVSOot6VK+dxR53wyl7POjkv7pkpcwpleJSCHP4eQjM0BB/ZuG4Hl9EO8mQx4ZQ0FfL+k+k+t4wNlULpkO24IGnSzpQklzKPDRAMvZ1eXz9uXfH/Pvx5Ie44C5zYQXUgDPj6LEnMCQ3AFkjjupjGF9/kJmxPw1oiquz+6dalXcCRSmYxwK0kDSRI71azb3Y+6GiMi6P/5ey3F3YpExjxdQoG61uX8gBetkh2OWFkUIVGUT1pS9yosZNu1nkl8uZH+mikhxkx1wz7mkB0WkXsKJFw1ZuSWKotY9wjNJS6mUy41JK5P0c2qCnBgIeQWZvEK7Dnf6WUljTT5TS7d0KwezkJShdWIeGeuKKJo7FktUQylcl0i6RtL/HH4OjP+wB0UTLTGHfubRDWyi1g7SaoZQ495z9w7RpaHKqHEfLeklEyWzk+7dl3TTu1KQCpV7+pBB4IWstFFAgvOpJnTL6DoW0xPbw3k/nIYkW+kbmHeXhUEABklazrBDBdzTDfyuBo5DPq1eoUk7ZbSk70l6n3MZjUdCDpQvMF/rezn7/hX7Xs8wsj/7rsrWdQxnZtrwwENUosJkDDZxTjOUkEH1ds6lzJyDZzGScRsonGNcMCIG+WgRKTRQ8Su2p7uRi/mlKjZKekREChS2KIOcTvfqp3RZDlM+cxnfv8Thc75Pt8kqo92VzNTbxBqcQlceivAdByHDIxbvFTMOLovyHAGGK3qc/jJDoDc4hpjABzBm4UAglBFqEAOqt8mB29ss4uJnNCHfSK/tVZMYEfMykt7Bcco1eDLDHCT8gmzzRdLHZL6wRSgzg6GIgVl8Xj2uhPA+oQn53yTdK2mVMC8NzuJ8zaSyM/ApxyzWCFJRvUQ3eQ29BTNFcRgt+FTl2g30zDZZtD/ZRMifE5ES6Y9MxqAHQ7XZikI9nd97j5p1f83GZTPr6Crt2sOcOB1zTYT8HrqjVRZx4wbSAt47SXn/YsZV9zp4zuvJgNGQRaszmoN1rBY6IH4dHiVHcA5dZd2zeIbPv8ZBkghYTQFTx/h1WvSz6c3kM5ewGG8Prvxc5DZWS2u+dypnM5Y3sIJMXmbxfXW0misZN56oxITnWsyl2fg+6+C+zWTefMWr68RwaYF271htHBZqCsKqL28wB/ACjYShrE9nUjfWmEU33A7woqbR4k5UlNk4yoYOzOHvtGs30KO1QgnlZC2VohGOIGn7WEvW0ZdoMeCHfBgdo8X++m3V+s2wEHKzJMblJom92+ne2SHDwT1gknUispPpJLrrVZqwLxTmy5F5jOdVS72F/b6UwlbrcEytrD00+a8l/ZUM82jEZd8peu8uNYS8JxNWqis5IYqQCy1rPUULh8Y7fOYal3zzmPb6aJN7zlf+32bBV9ESclNE85WUX4j4oNbl/fM1b2eoxX3jyXNqiDTP4Xe8Rm9ItfSjvAr6DM0d+o5MXW/CuHO0a7eZTLYT3KF9LktYZ/WdCI+IkoV+lFZ6l3J9OF14HdM0F3MrhXxFjJmqhh5FBera24XqxaCqL0UosK97Z2ku+yJaEqf4D62ByoROcjZuN78Xaa9zTBSzKvxvC+vlrmgWVPU2h4j4FCO5lZ+vNBnpYHHfOOX/PfR83eApTaGM8CLop5l88WSLWAOu4AiNme5owcBO1xhlLGO/eGAFkyYqrtFe5zKzqU7KBE5o/BAIiv7VJSK7qV4GhEF1XtSk0YseWl6lWYI+cXj6pigJLkH3Vk0qfebxe4q0JGOGSDxCWn/Nchk9qJgMfGKS87LDes1IHeVW0LszgaC6sPMYE5lBt4CzRcuy4lVMLKlWfWwcJ+YpxtcGjtOYfzRjTgNIlv0rnpyCveeHNFSJ/jUlonH/3nNYqyOU28qYhHOLbzVPqFc81JQDKxnQ5twLdmjfmQzlxU6eoZ/mma3y8D3VonlhUr6bElhMwJ81RseSxW+jfOYULdYGAw5s4WBtpeU0ijKwxnp/HCfn70piCNlMFEUU8/WpmnZe1Bq80r96m5yMkIwx9nnNHTWFs114q0ArM1HsiUY7j5/rKFIThdrrzR7agHyoy9vd3Ag64uEfKa+xjIKlLqtTUBB7FWgJrQ9joFl1d2cQ2wzHaeDXa6/ztO9Wx+OT+FrzSAKuV12ptOZp+ljnaVawk8uxDpnMZXYCGB3PXqe5sl7QQ5ubhhQR9B4mQpvjIR+gJgrbOxV0rK/rVUyXmyRWdI2a2YLEhVP3BwmN9sJ9BtQpKkxiSDOrUeUhaeQaPevKzKQ3oIVTSGatcynoRl29sIkh440a8pURNoz00Ab4Ts1obxCps1FKl8k5IpKbcmsgu6nz6ETQC+iSqoKKOPmVJBmYnDjHX4EozB9s7TgwykkyYS13URAHpmstYIloOP/HEi6Wx5a4+DwSpH2V18tTyHUPm3iQeS1s09ai4/0ntVgNRQmzHTRulGwaQNnei3FgHqPcMBEJlXrNioAaE8AcupKBd7ElBu1uTxCzg+dmKB4TahiQNX/OxssAb00Uzdeci4S3FYhEQdfkWCrc1cI2K+2EDhsP1OUxZGUnOWTmcgphV0UgZ4jUR1hLlBiuJfqJpb61CXimOrq8RqiEeu6TU3iMwdzYgWhUnWHDDKr0ptLar6USqmOfYYiGMMTUN/KgziGVTo+pNJHBBfF0zVAQc6N2DUL+tcO2Yc1Rk2ss+yBmOko43yCSCljJXAWA7PD4eAt6MBy2yiNACRvVVN05t40pPLYPsT+zlRDpOLG/Jt8OSGKhmnBpivV7q/Y6JkucVgkyWKb52rVZwl0tvNDi+AzRvKjfK1Dnjvpd1FhPEc1LBVsbqENXN35cFaPY2BIVGdlWYZKqgPPj/RythNtpcNycpoOxwAae0bGwhAkAQg01cfiDWDRqZtHhCqFQ5FAtOXKXh/Yh6Ci2N5YMUDW2SHg/N3scn02N++cnMIZCBdwS9gtApRxqDc6OlzWtSrdc8cJGlzP5fzZDri1tQNixISWL/5fSQvcVzfe/wzXfSG8Kuw03pHB/t5KMik+EYJ1EC1d0zCw6fofqRI2ZJwpvyxN4uPs0q/6UR2szyESobxatf3aa7jvfrT0DGPNpYV3H3CI0BYLGllQdy7TX14rUP/zzDHpuRp0EPLnJvH68Qij/RXnyIyku5Ea+5S3NO7s01q77eMY1qqY8T7Qs+4qtq+o2UWhjZO6HuWhjJBlZXWbAHvbFSTAxqMW+RbuG3VfviAP36tshujINh6Tr3kE0BNMl5x8Qq6+mVTdwrMlzpRrGaGPzVpw9NDNFngjoFZZzRCS/FRPXHRZT31X2MgfYTQYX1WE1moaaQJfKEFTs/camkXnUwt9YtNWPiuc67VmRlb0yiRgS/cAe7is0QXuTAm9kikM2DNc5OkeGRaMU8tq0TJHbUCOtezMeRfITiSv1PLLbGE5gb/NOB/1AuR1KlLETDltidyR4XIPasyEnc6eIbRa9kfNifFeXJOAnVJBiKfFCvobcLKccLHWojHJpIPH3iXQlpoNLrdcH44sucvmQOHHjZ9rDrGdbixVmbk/XGy4mtiKuoQDjmQpFJLs6wuSZvqKmL0ky6zOZLry+420UKUaue5ooyeqy9+iopgM989cp1Dcp16bSU1tOJbyFyjedTID5wOk6OAUFFXUDKFRLkmBM3xH7fzIJwPLsxexDMWP2b8g38DqN45ywCuH0VNuv+XmjwOYCjtUakbg6AkGlNoQGBMB5A9g8hh2g7zFE2U4F35FxfHfmwwbxcz3Yl32C/oAwPwDAS6UXdpOhXPZ27Trc9R/SLTla0zzGoXl2QAexnLVZJB/CZMpV7HthfL4lJIrb54u+tdv3/rCiSbw+k88yM9ZxXgKwlHmZycq13iSr0KeMHmUZw6r1VICrLT4D5fy4wq/5DAvfjaWC9oAd9KxwTNUJynUjL+EqpwSTME1zOWMBuIxmZ7p9RCsNq+NmdxW09I1MdNkJeYZNHsIt0qKEO2Z4kvmHadS+Xqv2cqzc93rpuhdl54tg2DISuJljBW3uZjMHrAPqHOYK6zPIM23G2+14Rts4cyLbdxo3Y667UskOo/W/m/PwRhQBwZFkT2vXzDbTtLMZCyfP1155bbfDrpjKZoYH41bO+d97jmEgMPVxFMF0iHESIkiNtDhKuwV058cw0dBZNP+lFsSU/6VWf0E4P/x+IF2eJnokr4uW/2jAKPYjjRb7Cxef70c3qsCl0im1Gj/Uu2eF6sWo0rUiTQq7zS+pYjywnXYwcyOZfI4mKgHj9N2ttHqbRfSlQXhjw5XXy4S7ZbzOovkxVRsphHp8ia3HlyleZS1zHcvoVrdjuNFdEe7edGHzSbpSria/WZ3+cxYV5DCx/4w7FUfyfTW0WO+i7x2YrzKUXZFw/sut+OxJDGkHUxEZPwgCquQcIgxZR9oXekDQk8FF60bqwocupaIoEz6EmaC3C+0Ro6Wgp4eb2tpPJqN+4xXFXQ3TfUfCc5PDNnLZDpLIV1NADKyjZa87mHgmWX57bYdIfIY3pdCGf43xQUXI62kBn3fZxi4SPC8crIjDQ4yzFAaz/XcPJn7xf03VRzIB5Z7qCbBzPQi5jga2E9bCD+ELug8ficEZCk/Cmj8Ro3aLtLxDR1/QffhIHNRTUZCf+S5G7SJBp2b7G31B9+EjcVAFEInZQ2LU7jiN1zf4gu7DR+KwTvkfO9bGx6BNnEQ8XXmN5cT3fEH34SNxwN4A9dgknIEwyWNbeRTwV7WYHBVwFQfbwKb7vOUjiYAiKVT1PczXqCLD/n5UbuLcNxTKoCgExSFNmsFCHI6iJBQFnUbqqbWPHyFceDAOrC/oPpIN+FVaVLrNUa6dLPbvoEQdO4pd1OUylBVkCutsOkqosbNvwcE6qL6g+0hG3MY4ejots1pT3kE4P9QDdfuLKeDfHswD6gu6j2TF2yQcLoqEGurre9EdP1QTfmxJRdn0NlrvD+jmY69Egz+UQvxfgAEALJ4EcRDa/toAAAAASUVORK5CYII="
                                                                            alt="Zend logo"
                                                                        />
                                                                    </a>
                                                                    This program makes use of the Zend Scripting Language
                                                                    Engine:
                                                                    <br />
                                                                    Zend&nbsp;Engine&nbsp;v3.4.0,&nbsp;Copyright&nbsp;(c)&nbsp;Zend&nbsp;Technologies
                                                                    <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;with&nbsp;the&nbsp;ionCube&nbsp;PHP&nbsp;Loader&nbsp;+&nbsp;ionCube24&nbsp;v10.4.1,&nbsp;Copyright&nbsp;(c)&nbsp;2002-2020,&nbsp;by&nbsp;ionCube&nbsp;Ltd.
                                                                    <br />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <hr />
                                                    <h1>Configuration</h1>
                                                    <h2>
                                                        <a name="module_apache2handler">apache2handler</a>
                                                    </h2>
                                                    <table></table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">engine</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">last_modified</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">xbithack</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>Apache Environment</h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Variable</th>
                                                                <th>Value</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>HTTP Headers Information</h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th colSpan={2}>HTTP Request Headers</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HTTP Request </td>
                                                                <td className="v">
                                                                    GET /security/phpconfig-check.php?i=1 HTTP/1.0{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Host </td>
                                                                <td className="v">psec22.byethost22.com </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">X-Forwarded-Proto </td>
                                                                <td className="v">http </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">X-Real-IP </td>
                                                                <td className="v">115.98.234.57 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">X-Forwarded-For </td>
                                                                <td className="v">115.98.234.57 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    ERgbyuwRETHUHwefbuethWEGIHERGUHqwef8i{" "}
                                                                </td>
                                                                <td className="v">115.98.234.57 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Connection </td>
                                                                <td className="v">close </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Upgrade-Insecure-Requests </td>
                                                                <td className="v">1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">User-Agent </td>
                                                                <td className="v">
                                                                    Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                                                                    AppleWebKit/537.36 (KHTML, like Gecko)
                                                                    Chrome/108.0.0.0 Safari/537.36{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Accept </td>
                                                                <td className="v">
                                                                    text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Referer </td>
                                                                <td className="v">
                                                                    http://psec22.byethost22.com/security/phpconfig-check.php{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Accept-Language </td>
                                                                <td className="v">en-US,en;q=0.9 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Cookie </td>
                                                                <td className="v">
                                                                    PHPSESSID=87040e0b3a9bd9d5a8df7994030d6ad9;
                                                                    __test=767cab7aef839b47b9b081df870e4111{" "}
                                                                </td>
                                                            </tr>
                                                            <tr className="h">
                                                                <th colSpan={2}>HTTP Response Headers</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Expires </td>
                                                                <td className="v">Thu, 19 Nov 1981 08:52:00 GMT </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Cache-Control </td>
                                                                <td className="v">
                                                                    no-store, no-cache, must-revalidate{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Pragma </td>
                                                                <td className="v">no-cache </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Connection </td>
                                                                <td className="v">close </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Content-Type </td>
                                                                <td className="v">text/html; charset=UTF-8 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_bcmath">bcmath</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">BCMath support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">bcmath.scale</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_calendar">calendar</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Calendar support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_core">Core</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">PHP Version </td>
                                                                <td className="v">7.4.8 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">allow_url_fopen</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">allow_url_include</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">arg_separator.input</td>
                                                                <td className="v">&amp;</td>
                                                                <td className="v">&amp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">arg_separator.output</td>
                                                                <td className="v">&amp;</td>
                                                                <td className="v">&amp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">auto_append_file</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">auto_globals_jit</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">auto_prepend_file</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">browscap</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">default_charset</td>
                                                                <td className="v">UTF-8</td>
                                                                <td className="v">UTF-8</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">default_mimetype</td>
                                                                <td className="v">text/html</td>
                                                                <td className="v">text/html</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">disable_classes</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">disable_functions</td>
                                                                <td className="v">
                                                                    exec,system,passthru,shell_exec,escapeshellarg,escapeshellcmd,proc_close,proc_open,ini_alter,dl,popen,popen,pcntl_exec,socket_accept,socket_bind,socket_clear_error,socket_close,socket_connect,socket_create_listen,socket_create_pair,socket_create,socket_get_option,socket_getpeername,socket_getsockname,socket_last_error,socket_listen,socket_read,socket_recv,socket_recvfrom,socket_select,socket_send,socket_sendto,socket_set_block,socket_set_nonblock,socket_set_option,socket_shutdown,socket_strerror,socket_write,stream_socket_server,pfsockopen,disk_total_space,disk_free_space,chown,diskfreespace,getrusage,get_current_user,set_time_limit,dl,leak,listen,chgrp,link,symlink,dlopen,proc_nice,proc_get_stats,proc_terminate,shell_exec,sh2_exec,posix_getpwuid,posix_getgrgid,posix_kill,ini_restore,mkfifo,dbmopen,dbase_open,filepro,filepro_rowcount,posix_mkfifo,_xyec,mainwork,get_num_redirects,putenv,geoip_open,sleep,imap_open
                                                                </td>
                                                                <td className="v">
                                                                    exec,system,passthru,shell_exec,escapeshellarg,escapeshellcmd,proc_close,proc_open,ini_alter,dl,popen,popen,pcntl_exec,socket_accept,socket_bind,socket_clear_error,socket_close,socket_connect,socket_create_listen,socket_create_pair,socket_create,socket_get_option,socket_getpeername,socket_getsockname,socket_last_error,socket_listen,socket_read,socket_recv,socket_recvfrom,socket_select,socket_send,socket_sendto,socket_set_block,socket_set_nonblock,socket_set_option,socket_shutdown,socket_strerror,socket_write,stream_socket_server,pfsockopen,disk_total_space,disk_free_space,chown,diskfreespace,getrusage,get_current_user,set_time_limit,dl,leak,listen,chgrp,link,symlink,dlopen,proc_nice,proc_get_stats,proc_terminate,shell_exec,sh2_exec,posix_getpwuid,posix_getgrgid,posix_kill,ini_restore,mkfifo,dbmopen,dbase_open,filepro,filepro_rowcount,posix_mkfifo,_xyec,mainwork,get_num_redirects,putenv,geoip_open,sleep,imap_open
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">display_errors</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">display_startup_errors</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">doc_root</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">docref_ext</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">docref_root</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">enable_dl</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">enable_post_data_reading</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">error_append_string</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">error_log</td>
                                                                <td className="v">/log/up</td>
                                                                <td className="v">/log/up</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">error_prepend_string</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">error_reporting</td>
                                                                <td className="v">32759</td>
                                                                <td className="v">32759</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">expose_php</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">extension_dir</td>
                                                                <td className="v">/usr/php70/lib/php/20151012/</td>
                                                                <td className="v">/usr/php70/lib/php/20151012/</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">file_uploads</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">hard_timeout</td>
                                                                <td className="v">2</td>
                                                                <td className="v">2</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">highlight.comment</td>
                                                                <td className="v">
                                                                    <font style={{ color: "#FF8000" }}>#FF8000</font>
                                                                </td>
                                                                <td className="v">
                                                                    <font style={{ color: "#FF8000" }}>#FF8000</font>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">highlight.default</td>
                                                                <td className="v">
                                                                    <font style={{ color: "#0000BB" }}>#0000BB</font>
                                                                </td>
                                                                <td className="v">
                                                                    <font style={{ color: "#0000BB" }}>#0000BB</font>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">highlight.html</td>
                                                                <td className="v">
                                                                    <font style={{ color: "#000000" }}>#000000</font>
                                                                </td>
                                                                <td className="v">
                                                                    <font style={{ color: "#000000" }}>#000000</font>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">highlight.keyword</td>
                                                                <td className="v">
                                                                    <font style={{ color: "#007700" }}>#007700</font>
                                                                </td>
                                                                <td className="v">
                                                                    <font style={{ color: "#007700" }}>#007700</font>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">highlight.string</td>
                                                                <td className="v">
                                                                    <font style={{ color: "#DD0000" }}>#DD0000</font>
                                                                </td>
                                                                <td className="v">
                                                                    <font style={{ color: "#DD0000" }}>#DD0000</font>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">html_errors</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ignore_repeated_errors</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ignore_repeated_source</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ignore_user_abort</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">implicit_flush</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">include_path</td>
                                                                <td className="v">.:/usr/share/pear/</td>
                                                                <td className="v">.:/usr/share/pear/</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">input_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">internal_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">log_errors</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">log_errors_max_len</td>
                                                                <td className="v">1024</td>
                                                                <td className="v">1024</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mail.add_x_header</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mail.force_extra_parameters</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mail.log</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">max_execution_time</td>
                                                                <td className="v">60</td>
                                                                <td className="v">60</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">max_file_uploads</td>
                                                                <td className="v">20</td>
                                                                <td className="v">20</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">max_input_nesting_level</td>
                                                                <td className="v">32</td>
                                                                <td className="v">64</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">max_input_time</td>
                                                                <td className="v">60</td>
                                                                <td className="v">60</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">max_input_vars</td>
                                                                <td className="v">8000</td>
                                                                <td className="v">8000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">memory_limit</td>
                                                                <td className="v">128M</td>
                                                                <td className="v">128M</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">open_basedir</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">output_buffering</td>
                                                                <td className="v">4096</td>
                                                                <td className="v">90000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">output_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">output_handler</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">post_max_size</td>
                                                                <td className="v">20M</td>
                                                                <td className="v">30M</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">precision</td>
                                                                <td className="v">12</td>
                                                                <td className="v">12</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">realpath_cache_size</td>
                                                                <td className="v">2M</td>
                                                                <td className="v">2M</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">realpath_cache_ttl</td>
                                                                <td className="v">6000</td>
                                                                <td className="v">6000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">register_argc_argv</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">report_memleaks</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">report_zend_debug</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">request_order</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">sendmail_from</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">sendmail_path</td>
                                                                <td className="v">
                                                                    /usr/sbin/sendmail&nbsp;-t&nbsp;-i
                                                                </td>
                                                                <td className="v">/usr/sbin/sendmail</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">serialize_precision</td>
                                                                <td className="v">100</td>
                                                                <td className="v">100</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">short_open_tag</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SMTP</td>
                                                                <td className="v">localhost</td>
                                                                <td className="v">localhost</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">smtp_port</td>
                                                                <td className="v">25</td>
                                                                <td className="v">25</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">sys_temp_dir</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">syslog.facility</td>
                                                                <td className="v">LOG_USER</td>
                                                                <td className="v">LOG_USER</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">syslog.filter</td>
                                                                <td className="v">no-ctrl</td>
                                                                <td className="v">no-ctrl</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">syslog.ident</td>
                                                                <td className="v">php</td>
                                                                <td className="v">php</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">track_errors</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">unserialize_callback_func</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">upload_max_filesize</td>
                                                                <td className="v">10M</td>
                                                                <td className="v">15M</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">upload_tmp_dir</td>
                                                                <td className="v">/tmp</td>
                                                                <td className="v">/tmp</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">user_dir</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">user_ini.cache_ttl</td>
                                                                <td className="v">300</td>
                                                                <td className="v">300</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">user_ini.filename</td>
                                                                <td className="v">.user.ini</td>
                                                                <td className="v">.user.ini</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">variables_order</td>
                                                                <td className="v">GPCS</td>
                                                                <td className="v">GPCS</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">xmlrpc_error_number</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">xmlrpc_errors</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.assertions</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.detect_unicode</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.enable_gc</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.exception_ignore_args</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.multibyte</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.script_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zend.signal_check</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_ctype">ctype</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">ctype functions </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_curl">curl</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">cURL support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">cURL Information </td>
                                                                <td className="v">7.71.1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Age </td>
                                                                <td className="v">6 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Features </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">AsynchDNS </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">CharConv </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Debug </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GSS-Negotiate </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">IDN </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">IPv6 </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">krb4 </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Largefile </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libz </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">NTLM </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">NTLMWB </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SPNEGO </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SSL </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SSPI </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">TLS-SRP </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HTTP2 </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GSSAPI </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">KERBEROS5 </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">UNIX_SOCKETS </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PSL </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HTTPS_PROXY </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">MULTI_SSL </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">BROTLI </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Protocols </td>
                                                                <td className="v">
                                                                    dict, file, ftp, ftps, gopher, http, https, imap,
                                                                    imaps, ldap, ldaps, pop3, pop3s, rtsp, smb, smbs,
                                                                    smtp, smtps, telnet, tftp{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Host </td>
                                                                <td className="v">x86_64-pc-linux-gnu </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SSL Version </td>
                                                                <td className="v">OpenSSL/1.1.1g </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ZLib Version </td>
                                                                <td className="v">1.2.3 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">curl.cainfo</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_date">date</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">date/time support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">timelib version </td>
                                                                <td className="v">2018.03 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    "Olson" Timezone Database Version{" "}
                                                                </td>
                                                                <td className="v">2020.1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Timezone Database </td>
                                                                <td className="v">internal </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Default timezone </td>
                                                                <td className="v">America/New_York </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">date.default_latitude</td>
                                                                <td className="v">31.7667</td>
                                                                <td className="v">31.7667</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">date.default_longitude</td>
                                                                <td className="v">35.2333</td>
                                                                <td className="v">35.2333</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">date.sunrise_zenith</td>
                                                                <td className="v">90.583333</td>
                                                                <td className="v">90.583333</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">date.sunset_zenith</td>
                                                                <td className="v">90.583333</td>
                                                                <td className="v">90.583333</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">date.timezone</td>
                                                                <td className="v">America/New_York</td>
                                                                <td className="v">America/New_York</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_dom">dom</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">DOM/XML </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">DOM/XML API Version </td>
                                                                <td className="v">20031129 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libxml Version </td>
                                                                <td className="v">2.7.6 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HTML Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XPath Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XPointer Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Schema Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">RelaxNG Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_exif">exif</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">EXIF Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Supported EXIF Version </td>
                                                                <td className="v">0220 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Supported filetypes </td>
                                                                <td className="v">JPEG, TIFF </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Multibyte decoding support using mbstring{" "}
                                                                </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Extended EXIF tag formats </td>
                                                                <td className="v">
                                                                    Canon, Casio, Fujifilm, Nikon, Olympus, Samsung,
                                                                    Panasonic, DJI, Sony, Pentax, Minolta, Sigma, Foveon,
                                                                    Kyocera, Ricoh, AGFA, Epson{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">exif.decode_jis_intel</td>
                                                                <td className="v">JIS</td>
                                                                <td className="v">JIS</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">exif.decode_jis_motorola</td>
                                                                <td className="v">JIS</td>
                                                                <td className="v">JIS</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">exif.decode_unicode_intel</td>
                                                                <td className="v">UCS-2LE</td>
                                                                <td className="v">UCS-2LE</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">exif.decode_unicode_motorola</td>
                                                                <td className="v">UCS-2BE</td>
                                                                <td className="v">UCS-2BE</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">exif.encode_jis</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">exif.encode_unicode</td>
                                                                <td className="v">ISO-8859-15</td>
                                                                <td className="v">ISO-8859-15</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_fileinfo">fileinfo</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">fileinfo support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libmagic </td>
                                                                <td className="v">537 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_filter">filter</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Input Validation and Filtering </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">filter.default</td>
                                                                <td className="v">unsafe_raw</td>
                                                                <td className="v">unsafe_raw</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">filter.default_flags</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_ftp">ftp</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">FTP support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FTPS support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_gd">gd</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">GD Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GD Version </td>
                                                                <td className="v">bundled (2.1.0 compatible) </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FreeType Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FreeType Linkage </td>
                                                                <td className="v">with freetype </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FreeType Version </td>
                                                                <td className="v">2.3.11 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GIF Read Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GIF Create Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">JPEG Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libJPEG Version </td>
                                                                <td className="v">6b </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PNG Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libPNG Version </td>
                                                                <td className="v">1.2.49 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">WBMP Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XBM Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">WebP Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">BMP Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">TGA Read Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">gd.jpeg_ignore_warning</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_gettext">gettext</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">GetText Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_gmp">gmp</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">gmp support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GMP version </td>
                                                                <td className="v">4.3.1 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_hash">hash</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">hash support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Hashing Engines </td>
                                                                <td className="v">
                                                                    md2 md4 md5 sha1 sha224 sha256 sha384 sha512/224
                                                                    sha512/256 sha512 sha3-224 sha3-256 sha3-384 sha3-512
                                                                    ripemd128 ripemd160 ripemd256 ripemd320 whirlpool
                                                                    tiger128,3 tiger160,3 tiger192,3 tiger128,4 tiger160,4
                                                                    tiger192,4 snefru snefru256 gost gost-crypto adler32
                                                                    crc32 crc32b crc32c fnv132 fnv1a32 fnv164 fnv1a64
                                                                    joaat haval128,3 haval160,3 haval192,3 haval224,3
                                                                    haval256,3 haval128,4 haval160,4 haval192,4 haval224,4
                                                                    haval256,4 haval128,5 haval160,5 haval192,5 haval224,5
                                                                    haval256,5
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_iconv">iconv</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">iconv support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">iconv implementation </td>
                                                                <td className="v">glibc </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">iconv library version </td>
                                                                <td className="v">2.12 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">iconv.input_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">iconv.internal_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">iconv.output_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_intl">intl</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Internationalization support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ICU version </td>
                                                                <td className="v">57.1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ICU Data version </td>
                                                                <td className="v">57.1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ICU TZData version </td>
                                                                <td className="v">2016b </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ICU Unicode version </td>
                                                                <td className="v">8.0 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">intl.default_locale</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">intl.error_level</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">intl.use_exceptions</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_ioncube+loader">ionCube Loader</a>
                                                    </h2>
                                                    <style
                                                        type="text/css"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                ".ioncube {\npadding:10px;\n}\n\n.icshadow {\n-webkit-box-shadow: 5px 5px 5px #999;\n-moz-box-shadow: 5px 5px 5px #999;\nbox-shadow: 5px 5px 5px #999;\nmargin-bottom: 10px;\n}\n\n.ioncube a {\ncolor:blue!important;\ntext-decoration:underline!important;\nbackground-color:transparent!important;\n}\n\n.ioncube span {\nmargin-bottom: 10px;\ndisplay:inline-block;\n}\n\n.iclogos {\nfloat: right;\nborder: 1px solid #bbb;\nborder-radius: 10px;\nbackground:#f0f0f0;\npadding: 10px;\nposition:relative;\nheight:47px;\nwidth:47px;\n}\n\n.iclogos img {\nposition:absolute;\nleft:10px;\n}\n@keyframes icKF {\n0% {opacity:0;}\n45% {opacity:0;}\n55% {opacity:1;}\n100% {opacity:1;}\n}\n\n@-webkit-keyframes icKF {\n0% {opacity:0;}\n45% {opacity:0;}\n55% {opacity:1;}\n100% {opacity:1;}\n}\n\n.iclogos img.top {\nanimation-name: icKF;\nanimation-timing-function: ease-in-out;\nanimation-iteration-count: infinite;\nanimation-duration: 6s;\nanimation-direction: alternate;\n-webkit-animation-name: icKF;\n-webkit-animation-timing-function: ease-in-out;\n-webkit-animation-iteration-count: infinite;\n-webkit-animation-duration: 6s;\n-webkit-animation-direction: alternate;\n}\n"
                                                        }}
                                                    />
                                                    <table>
                                                        <tbody>
                                                            <tr className="v">
                                                                <td>
                                                                    <div className="ioncube">
                                                                        <div className="iclogos icshadow">
                                                                            <img
                                                                                className="logo bottom"
                                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvAQMAAABJ6QHvAAAABlBMVEUAAADnHCzdZU5UAAAAAXRSTlMAQObYZgAAAB1JREFUGNNj+A8C//BSKAAmSH/qA8R2TAqqZGApABzlAKl/WOJXAAAAAElFTkSuQmCC"
                                                                                alt="ionCube logo"
                                                                            />
                                                                            <img
                                                                                className="logo top"
                                                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAMAAABE+WOeAAAAbFBMVEXAHS4Sc7j///8AAAC/HS8Lb7YAV6oQcrgIbbUAWqsARqEFa7QAZ7IAZLEAXa0dersAYa8AQJ8ALJR7stgAVKm/HS7w9/sAZbIAT6aXwuBEkcgAOpy62Ouu0OaaxOGOvN1cn89OlsoxhsIANZn5xp2bAAAA/UlEQVRIx+3Ty26DQAyF4cxpxp47EAiQpPe+/ztWYiiCtEZC6ZJ/Z+nDCzCHp2U4LLufd7/7//XHeWecj4s278emfj+ult3PS30cPJuYbOr03JtYeha8Tm8AFJnJs7GvaLTkP1ATUJSTN2UBOCN4Dsk2Di/047lLqFBJXrHWwT23k/dNezlJ+3OxQp1Gr+0V7gbnZe+bC1zIniMh9jdUgSVvqEBInL0m1F/VCSfygje2QEFejd5iLArvkxSCs1Fnz4H63q3sDwVq9Xl9j9kr1sZEBxdY8C2G0uBzmkDi9y0tWWtLP/Psu3w/G+/z4fsXZqn1//cPvzrvfveP+W9a0A8QyZV5dwAAAABJRU5ErkJggg=="
                                                                                alt="ionCube24 logo"
                                                                            />
                                                                        </div>
                                                                        <div className="icinfo">
                                                                            <span>
                                                                                ionCube Loader developed by ionCube Ltd.
                                                                            </span>
                                                                            <br />
                                                                            <span>
                                                                                Visit ioncube.com for{" "}
                                                                                <a
                                                                                    href="https://www.ioncube.com/loaders.php"
                                                                                    target="loaders"
                                                                                >
                                                                                    latest Loaders
                                                                                </a>{" "}
                                                                                and{" "}
                                                                                <a
                                                                                    href="https://support.ioncube.com"
                                                                                    target="icsupport"
                                                                                >
                                                                                    support
                                                                                </a>
                                                                                .
                                                                            </span>
                                                                            <br />
                                                                            <span>
                                                                                This Loader also includes features for real-time
                                                                                error reporting and malware protection. Visit{" "}
                                                                                <a
                                                                                    href="https://ioncube24.com"
                                                                                    target="ioncube24"
                                                                                >
                                                                                    ioncube24.com
                                                                                </a>{" "}
                                                                                for more details.
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Loader version </td>
                                                                <td className="v">10.4.1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ionCube24 features </td>
                                                                <td className="v">unconfigured </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.api.log_msg_errors</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.api.max_timeout</td>
                                                                <td className="v">7</td>
                                                                <td className="v">7</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.api_access_key</td>
                                                                <td className="v">********</td>
                                                                <td className="v">********</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.api_check_ip</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.enable</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.home_dir</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.phperr.enable</td>
                                                                <td className="v">auto</td>
                                                                <td className="v">auto</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.phperr.ignore</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.block_stdin</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.block_uploaded_files</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.enable</td>
                                                                <td className="v">auto</td>
                                                                <td className="v">auto</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.exclusion_key</td>
                                                                <td className="v">********</td>
                                                                <td className="v">********</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.initial_action</td>
                                                                <td className="v">block</td>
                                                                <td className="v">block</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.initial_cache_all</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.initial_notify</td>
                                                                <td className="v">always</td>
                                                                <td className="v">always</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.initial_state</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.stop_on_error</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.sec.trusted_include_paths</td>
                                                                <td className="v">********</td>
                                                                <td className="v">********</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ic24.slt</td>
                                                                <td className="v">7</td>
                                                                <td className="v">7</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    ic24.update_domains_retry_interval
                                                                </td>
                                                                <td className="v">30</td>
                                                                <td className="v">30</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ioncube.loader.encoded_paths</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_json">json</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">json support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_libxml">libxml</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">libXML support </td>
                                                                <td className="v">active </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libXML Compiled Version </td>
                                                                <td className="v">2.7.6 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libXML Loaded Version </td>
                                                                <td className="v">20706 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libXML streams </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_mbstring">mbstring</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Multibyte Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Multibyte string engine </td>
                                                                <td className="v">libmbfl </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HTTP input encoding translation </td>
                                                                <td className="v">disabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libmbfl version </td>
                                                                <td className="v">1.3.2 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>
                                                                    mbstring extension makes use of "streamable kanji code
                                                                    filter and converter", which is distributed under the
                                                                    GNU Lesser General Public License version 2.1.
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">
                                                                    Multibyte (japanese) regex support{" "}
                                                                </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Multibyte regex (oniguruma) version{" "}
                                                                </td>
                                                                <td className="v">5.9.5 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.detect_order</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.encoding_translation</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.func_overload</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.http_input</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.http_output</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    mbstring.http_output_conv_mimetypes
                                                                </td>
                                                                <td className="v">^(text/|application/xhtml\+xml)</td>
                                                                <td className="v">^(text/|application/xhtml\+xml)</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.internal_encoding</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.language</td>
                                                                <td className="v">neutral</td>
                                                                <td className="v">neutral</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.regex_retry_limit</td>
                                                                <td className="v">1000000</td>
                                                                <td className="v">1000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.regex_stack_limit</td>
                                                                <td className="v">100000</td>
                                                                <td className="v">100000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.strict_detection</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mbstring.substitute_character</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_mysql">mysql</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>MySQL Support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Active Persistent Links </td>
                                                                <td className="v">0 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Active Links </td>
                                                                <td className="v">0 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Client API version </td>
                                                                <td className="v">mysqlnd 7.4.8 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.allow_local_infile</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.allow_persistent</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.connect_timeout</td>
                                                                <td className="v">5</td>
                                                                <td className="v">5</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.default_host</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.default_password</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.default_port</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.default_socket</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.default_user</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.max_links</td>
                                                                <td className="v">Unlimited</td>
                                                                <td className="v">Unlimited</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.max_persistent</td>
                                                                <td className="v">Unlimited</td>
                                                                <td className="v">Unlimited</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysql.trace_mode</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_mysqli">mysqli</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>MysqlI Support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Client API library version </td>
                                                                <td className="v">mysqlnd 7.4.8 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Active Persistent Links </td>
                                                                <td className="v">0 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Inactive Persistent Links </td>
                                                                <td className="v">0 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Active Links </td>
                                                                <td className="v">1 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.allow_local_infile</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.allow_persistent</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.default_host</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.default_port</td>
                                                                <td className="v">3306</td>
                                                                <td className="v">3306</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.default_pw</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.default_socket</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.default_user</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.max_links</td>
                                                                <td className="v">Unlimited</td>
                                                                <td className="v">Unlimited</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.max_persistent</td>
                                                                <td className="v">Unlimited</td>
                                                                <td className="v">Unlimited</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.reconnect</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">mysqli.rollback_on_cached_plink</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_mysqlnd">mysqlnd</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>mysqlnd</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Version </td>
                                                                <td className="v">mysqlnd 7.4.8 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Compression </td>
                                                                <td className="v">supported </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">core SSL </td>
                                                                <td className="v">supported </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">extended SSL </td>
                                                                <td className="v">supported </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Command buffer size </td>
                                                                <td className="v">4096 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Read buffer size </td>
                                                                <td className="v">32768 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Read timeout </td>
                                                                <td className="v">86400 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Collecting statistics </td>
                                                                <td className="v">Yes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Collecting memory statistics </td>
                                                                <td className="v">No </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Tracing </td>
                                                                <td className="v">n/a </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Loaded plugins </td>
                                                                <td className="v">
                                                                    mysqlnd,debug_trace,auth_plugin_mysql_native_password,auth_plugin_mysql_clear_password,auth_plugin_caching_sha2_password,auth_plugin_sha256_password{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">API Extensions </td>
                                                                <td className="v">mysqli,pdo_mysql,mysql </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_openssl">openssl</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">OpenSSL support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">OpenSSL Library Version </td>
                                                                <td className="v">OpenSSL 1.1.1g 21 Apr 2020 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">OpenSSL Header Version </td>
                                                                <td className="v">OpenSSL 1.1.1g 21 Apr 2020 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Openssl default config </td>
                                                                <td className="v">/usr/local/ssl/openssl.cnf </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">openssl.cafile</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">openssl.capath</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_pcre">pcre</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">
                                                                    PCRE (Perl Compatible Regular Expressions) Support{" "}
                                                                </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PCRE Library Version </td>
                                                                <td className="v">10.34 2019-11-21 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PCRE Unicode Version </td>
                                                                <td className="v">12.1.0 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PCRE JIT Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PCRE JIT Target </td>
                                                                <td className="v">
                                                                    x86 64bit (little endian + unaligned){" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">pcre.backtrack_limit</td>
                                                                <td className="v">1000000</td>
                                                                <td className="v">1000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">pcre.jit</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">pcre.recursion_limit</td>
                                                                <td className="v">100000</td>
                                                                <td className="v">100000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_pdo">PDO</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>PDO support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PDO drivers </td>
                                                                <td className="v">mysql, sqlite </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_pdo_mysql">pdo_mysql</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>PDO Driver for MySQL</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Client API version </td>
                                                                <td className="v">mysqlnd 7.4.8 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">pdo_mysql.default_socket</td>
                                                                <td className="v">/tmp/mysql.sock</td>
                                                                <td className="v">/tmp/mysql.sock</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_pdo_sqlite">pdo_sqlite</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>PDO Driver for SQLite 3.x</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SQLite Library </td>
                                                                <td className="v">3.7.17 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_phar">Phar</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Phar: PHP Archive support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Phar API version </td>
                                                                <td className="v">1.1.1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Phar-based phar archives </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Tar-based phar archives </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ZIP-based phar archives </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">gzip compression </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">bzip2 compression </td>
                                                                <td className="v">disabled (install ext/bz2) </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">OpenSSL support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="v">
                                                                <td>
                                                                    Phar based on pear/PHP_Archive, original concept by
                                                                    Davey Shafik.
                                                                    <br />
                                                                    Phar fully realized by Gregory Beaver and Marcus
                                                                    Boerger.
                                                                    <br />
                                                                    Portions of tar implementation Copyright (c) 2003-2009
                                                                    Tim Kientzle.
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">phar.cache_list</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">phar.readonly</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">phar.require_hash</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_reflection">Reflection</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Reflection </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_session">session</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Session Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Registered save handlers </td>
                                                                <td className="v">files user</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Registered serializer handlers </td>
                                                                <td className="v">php_serialize php php_binary</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.auto_start</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cache_expire</td>
                                                                <td className="v">60</td>
                                                                <td className="v">60</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cache_limiter</td>
                                                                <td className="v">nocache</td>
                                                                <td className="v">nocache</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cookie_domain</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cookie_httponly</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cookie_lifetime</td>
                                                                <td className="v">86400</td>
                                                                <td className="v">86400</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cookie_path</td>
                                                                <td className="v">/</td>
                                                                <td className="v">/</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cookie_samesite</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.cookie_secure</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.gc_divisor</td>
                                                                <td className="v">500</td>
                                                                <td className="v">500</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.gc_maxlifetime</td>
                                                                <td className="v">1440</td>
                                                                <td className="v">1440</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.gc_probability</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.lazy_write</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.name</td>
                                                                <td className="v">PHPSESSID</td>
                                                                <td className="v">PHPSESSID</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.referer_check</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.save_handler</td>
                                                                <td className="v">files</td>
                                                                <td className="v">files</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.save_path</td>
                                                                <td className="v">/php_sessions</td>
                                                                <td className="v">/php_sessions</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.serialize_handler</td>
                                                                <td className="v">php</td>
                                                                <td className="v">php</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.sid_bits_per_character</td>
                                                                <td className="v">4</td>
                                                                <td className="v">4</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.sid_length</td>
                                                                <td className="v">32</td>
                                                                <td className="v">32</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.upload_progress.cleanup</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.upload_progress.enabled</td>
                                                                <td className="v">On</td>
                                                                <td className="v">On</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.upload_progress.freq</td>
                                                                <td className="v">1%</td>
                                                                <td className="v">1%</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.upload_progress.min_freq</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.upload_progress.name</td>
                                                                <td className="v">PHP_SESSION_UPLOAD_PROGRESS</td>
                                                                <td className="v">PHP_SESSION_UPLOAD_PROGRESS</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.upload_progress.prefix</td>
                                                                <td className="v">upload_progress_</td>
                                                                <td className="v">upload_progress_</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.use_cookies</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.use_only_cookies</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.use_strict_mode</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.use_trans_sid</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_simplexml">SimpleXML</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">SimpleXML support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Schema support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_soap">soap</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Soap Client </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Soap Server </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">soap.wsdl_cache</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">soap.wsdl_cache_dir</td>
                                                                <td className="v">/tmp</td>
                                                                <td className="v">/tmp</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">soap.wsdl_cache_enabled</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">soap.wsdl_cache_limit</td>
                                                                <td className="v">5</td>
                                                                <td className="v">5</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">soap.wsdl_cache_ttl</td>
                                                                <td className="v">86400</td>
                                                                <td className="v">86400</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_spl">SPL</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>SPL support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Interfaces </td>
                                                                <td className="v">
                                                                    OuterIterator, RecursiveIterator, SeekableIterator,
                                                                    SplObserver, SplSubject{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Classes </td>
                                                                <td className="v">
                                                                    AppendIterator, ArrayIterator, ArrayObject,
                                                                    BadFunctionCallException, BadMethodCallException,
                                                                    CachingIterator, CallbackFilterIterator,
                                                                    DirectoryIterator, DomainException, EmptyIterator,
                                                                    FilesystemIterator, FilterIterator, GlobIterator,
                                                                    InfiniteIterator, InvalidArgumentException,
                                                                    IteratorIterator, LengthException, LimitIterator,
                                                                    LogicException, MultipleIterator, NoRewindIterator,
                                                                    OutOfBoundsException, OutOfRangeException,
                                                                    OverflowException, ParentIterator, RangeException,
                                                                    RecursiveArrayIterator, RecursiveCachingIterator,
                                                                    RecursiveCallbackFilterIterator,
                                                                    RecursiveDirectoryIterator, RecursiveFilterIterator,
                                                                    RecursiveIteratorIterator, RecursiveRegexIterator,
                                                                    RecursiveTreeIterator, RegexIterator,
                                                                    RuntimeException, SplDoublyLinkedList, SplFileInfo,
                                                                    SplFileObject, SplFixedArray, SplHeap, SplMinHeap,
                                                                    SplMaxHeap, SplObjectStorage, SplPriorityQueue,
                                                                    SplQueue, SplStack, SplTempFileObject,
                                                                    UnderflowException, UnexpectedValueException{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_sqlite3">sqlite3</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>SQLite3 support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SQLite Library </td>
                                                                <td className="v">3.7.17 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">sqlite3.extension_dir</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_standard">standard</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Dynamic Library Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Path to sendmail </td>
                                                                <td className="v">/usr/sbin/sendmail -t -i </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">assert.active</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">assert.bail</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">assert.callback</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">assert.exception</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">assert.quiet_eval</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">assert.warning</td>
                                                                <td className="v">1</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">auto_detect_line_endings</td>
                                                                <td className="v">0</td>
                                                                <td className="v">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">default_socket_timeout</td>
                                                                <td className="v">3</td>
                                                                <td className="v">4</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">from</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.trans_sid_hosts</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">session.trans_sid_tags</td>
                                                                <td className="v">a=href,area=href,frame=src,form=</td>
                                                                <td className="v">a=href,area=href,frame=src,form=</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">unserialize_max_depth</td>
                                                                <td className="v">4096</td>
                                                                <td className="v">4096</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">url_rewriter.hosts</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">url_rewriter.tags</td>
                                                                <td className="v">
                                                                    a=href,area=href,frame=src,input=src,form=,fieldset=
                                                                </td>
                                                                <td className="v">
                                                                    a=href,area=href,frame=src,input=src,form=,fieldset=
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">user_agent</td>
                                                                <td className="v">
                                                                    Sockets&nbsp;from&nbsp;free&nbsp;hosting&nbsp;account&nbsp;if&nbsp;abused&nbsp;please&nbsp;report&nbsp;to&nbsp;response@ifastnet.com&nbsp;with&nbsp;the&nbsp;ip&nbsp;address&nbsp;of&nbsp;the&nbsp;server&nbsp;connections&nbsp;are&nbsp;going&nbsp;TO
                                                                </td>
                                                                <td className="v">
                                                                    Sockets&nbsp;from&nbsp;free&nbsp;hosting&nbsp;account&nbsp;if&nbsp;abused&nbsp;please&nbsp;report&nbsp;to&nbsp;response@ifastnet.com&nbsp;with&nbsp;the&nbsp;ip&nbsp;address&nbsp;of&nbsp;the&nbsp;server&nbsp;connections&nbsp;are&nbsp;going&nbsp;TO
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_tokenizer">tokenizer</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Tokenizer Support </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_xml">xml</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">XML Support </td>
                                                                <td className="v">active </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XML Namespace Support </td>
                                                                <td className="v">active </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libxml2 Version </td>
                                                                <td className="v">2.7.6 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_xmlreader">xmlreader</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">XMLReader </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_xmlrpc">xmlrpc</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">core library version </td>
                                                                <td className="v">xmlrpc-epi v. 0.51 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">author </td>
                                                                <td className="v">Dan Libby </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">homepage </td>
                                                                <td className="v">
                                                                    http://xmlrpc-epi.sourceforge.net{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">open sourced by </td>
                                                                <td className="v">Epinions.com </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_xmlwriter">xmlwriter</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">XMLWriter </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_xsl">xsl</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">XSL </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libxslt Version </td>
                                                                <td className="v">1.1.26 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    libxslt compiled against libxml Version{" "}
                                                                </td>
                                                                <td className="v">2.7.6 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">EXSLT </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">libexslt Version </td>
                                                                <td className="v">1.1.26 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_zip">zip</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="e">Zip </td>
                                                                <td className="v">enabled </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zip version </td>
                                                                <td className="v">1.15.6 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Libzip headers version </td>
                                                                <td className="v">1.7.3 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Libzip library version </td>
                                                                <td className="v">1.3.2 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>
                                                        <a name="module_zlib">zlib</a>
                                                    </h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>ZLib Support</th>
                                                                <th>enabled</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Stream Wrapper </td>
                                                                <td className="v">compress.zlib:// </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Stream Filter </td>
                                                                <td className="v">zlib.inflate, zlib.deflate </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Compiled Version </td>
                                                                <td className="v">1.2.11 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Linked Version </td>
                                                                <td className="v">1.2.3 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Directive</th>
                                                                <th>Local Value</th>
                                                                <th>Master Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zlib.output_compression</td>
                                                                <td className="v">Off</td>
                                                                <td className="v">Off</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zlib.output_compression_level</td>
                                                                <td className="v">-1</td>
                                                                <td className="v">-1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">zlib.output_handler</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>Additional Modules</h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Module Name</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>Environment</h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Variable</th>
                                                                <th>Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">MANPATH </td>
                                                                <td className="v">
                                                                    /opt/rh/httpd24/root/usr/share/man::/opt/puppetlabs/puppet/share/man{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HOSTNAME </td>
                                                                <td className="v">freeweb4.byetcluster.com </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SHELL </td>
                                                                <td className="v">/bin/sh </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HISTSIZE </td>
                                                                <td className="v">1000 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LIBRARY_PATH </td>
                                                                <td className="v">/opt/rh/httpd24/root/usr/lib64 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">QTDIR </td>
                                                                <td className="v">/usr/lib64/qt-3.3 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">QTINC </td>
                                                                <td className="v">/usr/lib64/qt-3.3/include </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">X_SCLS </td>
                                                                <td className="v"> httpd24 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">USER </td>
                                                                <td className="v">root </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LD_LIBRARY_PATH </td>
                                                                <td className="v">/opt/rh/httpd24/root/usr/lib64 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">MAIL </td>
                                                                <td className="v">/var/spool/mail/root </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PATH </td>
                                                                <td className="v">
                                                                    /opt/rh/httpd24/root/usr/bin:/opt/rh/httpd24/root/usr/sbin:/sbin:/usr/sbin:/bin:/usr/bin{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PWD </td>
                                                                <td className="v">/root </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LANG </td>
                                                                <td className="v">C </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HISTCONTROL </td>
                                                                <td className="v">ignoredups </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">HOME </td>
                                                                <td className="v">/root </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SHLVL </td>
                                                                <td className="v">4 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LOGNAME </td>
                                                                <td className="v">root </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">QTLIB </td>
                                                                <td className="v">/usr/lib64/qt-3.3/lib </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">CVS_RSH </td>
                                                                <td className="v">ssh </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LESSOPEN </td>
                                                                <td className="v">||/usr/bin/lesspipe.sh %s </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PKG_CONFIG_PATH </td>
                                                                <td className="v">
                                                                    /opt/rh/httpd24/root/usr/lib64/pkgconfig{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">G_BROKEN_FILENAMES </td>
                                                                <td className="v">1 </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">_ </td>
                                                                <td className="v">
                                                                    /opt/rh/httpd24-php70/root/usr/sbin/httpd{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>PHP Variables</h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Variable</th>
                                                                <th>Value</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_REQUEST['i']</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_REQUEST['PHPSESSID']</td>
                                                                <td className="v">87040e0b3a9bd9d5a8df7994030d6ad9</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_REQUEST['__test']</td>
                                                                <td className="v">767cab7aef839b47b9b081df870e4111</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_GET['i']</td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_COOKIE['PHPSESSID']</td>
                                                                <td className="v">87040e0b3a9bd9d5a8df7994030d6ad9</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_COOKIE['__test']</td>
                                                                <td className="v">767cab7aef839b47b9b081df870e4111</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['UNIQUE_ID']</td>
                                                                <td className="v">Y8emlcNzqsz20QytDy8GowAAAAE</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['VH_GECOS']</td>
                                                                <td className="v">psec22.byethost22.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['VH_PATH']</td>
                                                                <td className="v">
                                                                    /home/vol13_7/byethost22.com/b22_32504351/htdocs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_ROOT']</td>
                                                                <td className="v">
                                                                    /home/vol13_7/byethost22.com/b22_32504351/htdocs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['PHP_DOCUMENT_ROOT']</td>
                                                                <td className="v">
                                                                    /home/vol13_7/byethost22.com/b22_32504351/htdocs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['PATH']</td>
                                                                <td className="v">
                                                                    /opt/rh/httpd24/root/usr/bin:/opt/rh/httpd24/root/usr/sbin:/sbin:/usr/sbin:/bin:/usr/bin
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_HOST']</td>
                                                                <td className="v">psec22.byethost22.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    $_SERVER['HTTP_X_FORWARDED_PROTO']
                                                                </td>
                                                                <td className="v">http</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_X_REAL_IP']</td>
                                                                <td className="v">115.98.234.57</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_X_FORWARDED_FOR']</td>
                                                                <td className="v">115.98.234.57</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    $_SERVER['HTTP_ERGBYUWRETHUHWEFBUETHWEGIHERGUHQWEF8I']
                                                                </td>
                                                                <td className="v">115.98.234.57</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_CONNECTION']</td>
                                                                <td className="v">close</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    $_SERVER['HTTP_UPGRADE_INSECURE_REQUESTS']
                                                                </td>
                                                                <td className="v">1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_USER_AGENT']</td>
                                                                <td className="v">
                                                                    Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                                                                    AppleWebKit/537.36 (KHTML, like Gecko)
                                                                    Chrome/108.0.0.0 Safari/537.36
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_ACCEPT']</td>
                                                                <td className="v">
                                                                    text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_REFERER']</td>
                                                                <td className="v">
                                                                    http://psec22.byethost22.com/security/phpconfig-check.php
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_ACCEPT_LANGUAGE']</td>
                                                                <td className="v">en-US,en;q=0.9</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['HTTP_COOKIE']</td>
                                                                <td className="v">
                                                                    PHPSESSID=87040e0b3a9bd9d5a8df7994030d6ad9;
                                                                    __test=767cab7aef839b47b9b081df870e4111
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['LD_LIBRARY_PATH']</td>
                                                                <td className="v">/opt/rh/httpd24/root/usr/lib64</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_SIGNATURE']</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_SOFTWARE']</td>
                                                                <td className="v">Apache</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_NAME']</td>
                                                                <td className="v">psec22.byethost22.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_ADDR']</td>
                                                                <td className="v">127.0.0.7</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_PORT']</td>
                                                                <td className="v">80</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REMOTE_ADDR']</td>
                                                                <td className="v">115.98.234.57</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['DOCUMENT_ROOT']</td>
                                                                <td className="v">
                                                                    /home/vol13_7/byethost22.com/b22_32504351/htdocs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REQUEST_SCHEME']</td>
                                                                <td className="v">http</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['CONTEXT_PREFIX']</td>
                                                                <td className="v">
                                                                    <i>no value</i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['CONTEXT_DOCUMENT_ROOT']</td>
                                                                <td className="v">
                                                                    /home/vol13_7/byethost22.com/b22_32504351/htdocs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_ADMIN']</td>
                                                                <td className="v">root@foo.tld</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SCRIPT_FILENAME']</td>
                                                                <td className="v">
                                                                    /home/vol13_7/byethost22.com/b22_32504351/htdocs/security/phpconfig-check.php
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REMOTE_PORT']</td>
                                                                <td className="v">59394</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['GATEWAY_INTERFACE']</td>
                                                                <td className="v">CGI/1.1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SERVER_PROTOCOL']</td>
                                                                <td className="v">HTTP/1.0</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REQUEST_METHOD']</td>
                                                                <td className="v">GET</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['QUERY_STRING']</td>
                                                                <td className="v">i=1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REQUEST_URI']</td>
                                                                <td className="v">/security/phpconfig-check.php?i=1</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['SCRIPT_NAME']</td>
                                                                <td className="v">/security/phpconfig-check.php</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['PHP_SELF']</td>
                                                                <td className="v">/security/phpconfig-check.php</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REQUEST_TIME_FLOAT']</td>
                                                                <td className="v">1674028693.92</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">$_SERVER['REQUEST_TIME']</td>
                                                                <td className="v">1674028693</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <hr />
                                                    <h1>PHP Credits</h1>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>PHP Group</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Thies C. Arntzen, Stig Bakken, Shane Caraveo, Andi
                                                                    Gutmans, Rasmus Lerdorf, Sam Ruby, Sascha Schumann,
                                                                    Zeev Suraski, Jim Winstead, Andrei Zmievski{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>Language Design &amp; Concept</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Andi Gutmans, Rasmus Lerdorf, Zeev Suraski, Marcus
                                                                    Boerger{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th colSpan={2}>PHP Authors</th>
                                                            </tr>
                                                            <tr className="h">
                                                                <th>Contribution</th>
                                                                <th>Authors</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zend Scripting Language Engine </td>
                                                                <td className="v">
                                                                    Andi Gutmans, Zeev Suraski, Stanislav Malyshev, Marcus
                                                                    Boerger, Dmitry Stogov, Xinchen Hui, Nikita Popov{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Extension Module API </td>
                                                                <td className="v">
                                                                    Andi Gutmans, Zeev Suraski, Andrei Zmievski{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">UNIX Build and Modularization </td>
                                                                <td className="v">
                                                                    Stig Bakken, Sascha Schumann, Jani Taskinen, Peter
                                                                    Kokot{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Windows Support </td>
                                                                <td className="v">
                                                                    Shane Caraveo, Zeev Suraski, Wez Furlong, Pierre-Alain
                                                                    Joye, Anatol Belski, Kalle Sommer Nielsen{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Server API (SAPI) Abstraction Layer{" "}
                                                                </td>
                                                                <td className="v">
                                                                    Andi Gutmans, Shane Caraveo, Zeev Suraski{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Streams Abstraction Layer </td>
                                                                <td className="v">Wez Furlong, Sara Golemon </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PHP Data Objects Layer </td>
                                                                <td className="v">
                                                                    Wez Furlong, Marcus Boerger, Sterling Hughes, George
                                                                    Schlossnagle, Ilia Alshanetsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Output Handler </td>
                                                                <td className="v">
                                                                    Zeev Suraski, Thies C. Arntzen, Marcus Boerger,
                                                                    Michael Wallner{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Consistent 64 bit support </td>
                                                                <td className="v">Anthony Ferrara, Anatol Belski </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th colSpan={2}>SAPI Modules</th>
                                                            </tr>
                                                            <tr className="h">
                                                                <th>Contribution</th>
                                                                <th>Authors</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Apache 2.0 Handler </td>
                                                                <td className="v">
                                                                    Ian Holsman, Justin Erenkrantz (based on Apache 2.0
                                                                    Filter code){" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">CGI / FastCGI </td>
                                                                <td className="v">
                                                                    Rasmus Lerdorf, Stig Bakken, Shane Caraveo, Dmitry
                                                                    Stogov{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">CLI </td>
                                                                <td className="v">
                                                                    Edin Kadribasic, Marcus Boerger, Johannes Schlueter,
                                                                    Moriyoshi Koizumi, Xinchen Hui{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Embed </td>
                                                                <td className="v">Edin Kadribasic </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FastCGI Process Manager </td>
                                                                <td className="v">
                                                                    Andrei Nigmatulin, dreamcat4, Antony Dovgal, Jerome
                                                                    Loyet{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">litespeed </td>
                                                                <td className="v">George Wang </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">phpdbg </td>
                                                                <td className="v">
                                                                    Felipe Pena, Joe Watkins, Bob Weinand{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th colSpan={2}>Module Authors</th>
                                                            </tr>
                                                            <tr className="h">
                                                                <th>Module</th>
                                                                <th>Authors</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">BC Math </td>
                                                                <td className="v">Andi Gutmans </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Bzip2 </td>
                                                                <td className="v">Sterling Hughes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Calendar </td>
                                                                <td className="v">
                                                                    Shane Caraveo, Colin Viebrock, Hartmut Holzgraefe, Wez
                                                                    Furlong{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">COM and .Net </td>
                                                                <td className="v">Wez Furlong </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ctype </td>
                                                                <td className="v">Hartmut Holzgraefe </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">cURL </td>
                                                                <td className="v">Sterling Hughes </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Date/Time Support </td>
                                                                <td className="v">Derick Rethans </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">DB-LIB (MS SQL, Sybase) </td>
                                                                <td className="v">
                                                                    Wez Furlong, Frank M. Kromann, Adam Baratz{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">DBA </td>
                                                                <td className="v">Sascha Schumann, Marcus Boerger </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">DOM </td>
                                                                <td className="v">
                                                                    Christian Stocker, Rob Richards, Marcus Boerger{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">enchant </td>
                                                                <td className="v">
                                                                    Pierre-Alain Joye, Ilia Alshanetsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">EXIF </td>
                                                                <td className="v">Rasmus Lerdorf, Marcus Boerger </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FFI </td>
                                                                <td className="v">Dmitry Stogov </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">fileinfo </td>
                                                                <td className="v">
                                                                    Ilia Alshanetsky, Pierre Alain Joye, Scott MacVicar,
                                                                    Derick Rethans, Anatol Belski{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Firebird driver for PDO </td>
                                                                <td className="v">Ard Biesheuvel </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">FTP </td>
                                                                <td className="v">Stefan Esser, Andrew Skalski </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GD imaging </td>
                                                                <td className="v">
                                                                    Rasmus Lerdorf, Stig Bakken, Jim Winstead, Jouni Ahto,
                                                                    Ilia Alshanetsky, Pierre-Alain Joye, Marcus Boerger{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GetText </td>
                                                                <td className="v">Alex Plotnick </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">GNU GMP support </td>
                                                                <td className="v">Stanislav Malyshev </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Iconv </td>
                                                                <td className="v">
                                                                    Rui Hirokawa, Stig Bakken, Moriyoshi Koizumi{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">IMAP </td>
                                                                <td className="v">
                                                                    Rex Logan, Mark Musone, Brian Wang, Kaj-Michael Lang,
                                                                    Antoni Pamies Olive, Rasmus Lerdorf, Andrew Skalski,
                                                                    Chuck Hagenbuch, Daniel R Kalowsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Input Filter </td>
                                                                <td className="v">
                                                                    Rasmus Lerdorf, Derick Rethans, Pierre-Alain Joye,
                                                                    Ilia Alshanetsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Internationalization </td>
                                                                <td className="v">
                                                                    Ed Batutis, Vladimir Iordanov, Dmitry Lakhtyuk,
                                                                    Stanislav Malyshev, Vadim Savchuk, Kirti Velankar{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">JSON </td>
                                                                <td className="v">
                                                                    Jakub Zelenka, Omar Kilani, Scott MacVicar{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LDAP </td>
                                                                <td className="v">
                                                                    Amitay Isaacs, Eric Warnke, Rasmus Lerdorf, Gerrit
                                                                    Thomson, Stig Venaas{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">LIBXML </td>
                                                                <td className="v">
                                                                    Christian Stocker, Rob Richards, Marcus Boerger, Wez
                                                                    Furlong, Shane Caraveo{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Multibyte String Functions </td>
                                                                <td className="v">Tsukada Takuya, Rui Hirokawa </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">MySQL driver for PDO </td>
                                                                <td className="v">
                                                                    George Schlossnagle, Wez Furlong, Ilia Alshanetsky,
                                                                    Johannes Schlueter{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">MySQLi </td>
                                                                <td className="v">
                                                                    Zak Greant, Georg Richter, Andrey Hristov, Ulf Wendel{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">MySQLnd </td>
                                                                <td className="v">
                                                                    Andrey Hristov, Ulf Wendel, Georg Richter, Johannes
                                                                    Schlüter{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">OCI8 </td>
                                                                <td className="v">
                                                                    Stig Bakken, Thies C. Arntzen, Andy Sautins, David
                                                                    Benson, Maxim Maletsky, Harald Radi, Antony Dovgal,
                                                                    Andi Gutmans, Wez Furlong, Christopher Jones, Oracle
                                                                    Corporation{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ODBC driver for PDO </td>
                                                                <td className="v">Wez Furlong </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">ODBC </td>
                                                                <td className="v">
                                                                    Stig Bakken, Andreas Karajannis, Frank M. Kromann,
                                                                    Daniel R. Kalowsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Opcache </td>
                                                                <td className="v">
                                                                    Andi Gutmans, Zeev Suraski, Stanislav Malyshev, Dmitry
                                                                    Stogov, Xinchen Hui{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">OpenSSL </td>
                                                                <td className="v">
                                                                    Stig Venaas, Wez Furlong, Sascha Kettler, Scott
                                                                    MacVicar{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Oracle (OCI) driver for PDO </td>
                                                                <td className="v">Wez Furlong </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">pcntl </td>
                                                                <td className="v">Jason Greene, Arnaud Le Blanc </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Perl Compatible Regexps </td>
                                                                <td className="v">Andrei Zmievski </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PHP Archive </td>
                                                                <td className="v">Gregory Beaver, Marcus Boerger </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PHP Data Objects </td>
                                                                <td className="v">
                                                                    Wez Furlong, Marcus Boerger, Sterling Hughes, George
                                                                    Schlossnagle, Ilia Alshanetsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PHP hash </td>
                                                                <td className="v">
                                                                    Sara Golemon, Rasmus Lerdorf, Stefan Esser, Michael
                                                                    Wallner, Scott MacVicar{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Posix </td>
                                                                <td className="v">Kristian Koehntopp </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PostgreSQL driver for PDO </td>
                                                                <td className="v">
                                                                    Edin Kadribasic, Ilia Alshanetsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PostgreSQL </td>
                                                                <td className="v">
                                                                    Jouni Ahto, Zeev Suraski, Yasuo Ohgaki, Chris
                                                                    Kings-Lynne{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Pspell </td>
                                                                <td className="v">Vlad Krupin </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Readline </td>
                                                                <td className="v">Thies C. Arntzen </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Reflection </td>
                                                                <td className="v">
                                                                    Marcus Boerger, Timm Friebe, George Schlossnagle,
                                                                    Andrei Zmievski, Johannes Schlueter{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Sessions </td>
                                                                <td className="v">Sascha Schumann, Andrei Zmievski </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Shared Memory Operations </td>
                                                                <td className="v">Slava Poliakov, Ilia Alshanetsky </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SimpleXML </td>
                                                                <td className="v">
                                                                    Sterling Hughes, Marcus Boerger, Rob Richards{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SNMP </td>
                                                                <td className="v">
                                                                    Rasmus Lerdorf, Harrie Hazewinkel, Mike Jackson,
                                                                    Steven Lawrance, Johann Hanne, Boris Lytochkin{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SOAP </td>
                                                                <td className="v">
                                                                    Brad Lafountain, Shane Caraveo, Dmitry Stogov{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Sockets </td>
                                                                <td className="v">
                                                                    Chris Vandomelen, Sterling Hughes, Daniel Beulshausen,
                                                                    Jason Greene{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Sodium </td>
                                                                <td className="v">Frank Denis </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SPL </td>
                                                                <td className="v">Marcus Boerger, Etienne Kneuss </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SQLite 3.x driver for PDO </td>
                                                                <td className="v">Wez Furlong </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">SQLite3 </td>
                                                                <td className="v">
                                                                    Scott MacVicar, Ilia Alshanetsky, Brad Dewar{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">System V Message based IPC </td>
                                                                <td className="v">Wez Furlong </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">System V Semaphores </td>
                                                                <td className="v">Tom May </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">System V Shared Memory </td>
                                                                <td className="v">Christian Cartus </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">tidy </td>
                                                                <td className="v">
                                                                    John Coggeshall, Ilia Alshanetsky{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">tokenizer </td>
                                                                <td className="v">
                                                                    Andrei Zmievski, Johannes Schlueter{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XML </td>
                                                                <td className="v">
                                                                    Stig Bakken, Thies C. Arntzen, Sterling Hughes{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XMLReader </td>
                                                                <td className="v">Rob Richards </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">xmlrpc </td>
                                                                <td className="v">Dan Libby </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XMLWriter </td>
                                                                <td className="v">Rob Richards, Pierre-Alain Joye </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">XSL </td>
                                                                <td className="v">Christian Stocker, Rob Richards </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zip </td>
                                                                <td className="v">Pierre-Alain Joye, Remi Collet </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Zlib </td>
                                                                <td className="v">
                                                                    Rasmus Lerdorf, Stefan Roehrich, Zeev Suraski, Jade
                                                                    Nicoletti, Michael Wallner{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th colSpan={2}>PHP Documentation</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Authors </td>
                                                                <td className="v">
                                                                    Mehdi Achour, Friedhelm Betz, Antony Dovgal, Nuno
                                                                    Lopes, Hannes Magnusson, Philip Olson, Georg Richter,
                                                                    Damien Seguy, Jakub Vrana, Adam Harvey{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Editor </td>
                                                                <td className="v">Peter Cowburn </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">User Note Maintainers </td>
                                                                <td className="v">
                                                                    Daniel P. Brown, Thiago Henrique Pojda{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Other Contributors </td>
                                                                <td className="v">
                                                                    Previously active authors, editors and other
                                                                    contributors are listed in the manual.{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th>PHP Quality Assurance Team</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">
                                                                    Ilia Alshanetsky, Joerg Behrens, Antony Dovgal, Stefan
                                                                    Esser, Moriyoshi Koizumi, Magnus Maatta, Sebastian
                                                                    Nohn, Derick Rethans, Melvyn Sopacua, Pierre-Alain
                                                                    Joye, Dmitry Stogov, Felipe Pena, David Soria Parra,
                                                                    Stanislav Malyshev, Julien Pauli, Stephen Zarkos,
                                                                    Anatol Belski, Remi Collet, Ferenc Kovacs{" "}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table>
                                                        <tbody>
                                                            <tr className="h">
                                                                <th colSpan={2}>Websites and Infrastructure team</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">PHP Websites Team </td>
                                                                <td className="v">
                                                                    Rasmus Lerdorf, Hannes Magnusson, Philip Olson, Lukas
                                                                    Kahwe Smith, Pierre-Alain Joye, Kalle Sommer Nielsen,
                                                                    Peter Cowburn, Adam Harvey, Ferenc Kovacs, Levi
                                                                    Morrison{" "}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Event Maintainers </td>
                                                                <td className="v">Damien Seguy, Daniel P. Brown </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Network Infrastructure </td>
                                                                <td className="v">Daniel P. Brown </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="e">Windows Infrastructure </td>
                                                                <td className="v">Alex Schoenmaker </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2>PHP License</h2>
                                                    <table>
                                                        <tbody>
                                                            <tr className="v">
                                                                <td>
                                                                    <p>
                                                                        This program is free software; you can redistribute
                                                                        it and/or modify it under the terms of the PHP
                                                                        License as published by the PHP Group and included
                                                                        in the distribution in the file: LICENSE
                                                                    </p>
                                                                    <p>
                                                                        This program is distributed in the hope that it will
                                                                        be useful, but WITHOUT ANY WARRANTY; without even
                                                                        the implied warranty of MERCHANTABILITY or FITNESS
                                                                        FOR A PARTICULAR PURPOSE.
                                                                    </p>
                                                                    <p>
                                                                        If you did not receive a copy of the PHP license, or
                                                                        have any questions about PHP licensing, please
                                                                        contact license@php.net.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">PHP Configuration Checker</h3>
                                        </div>
                                        <div className="card-body">
                                            <DataTable
                                                columns={columns}
                                                data={data}
                                                pagination
                                                highlightOnHover
                                            />
                                            <br />
                                            <h4 className="card-title mb-3">Result Statistics</h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <td className="Critical">
                                                                Critical:
                                                                <h5>
                                                                    <span className="badge  badge-dark">
                                                                        0
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="High">High:
                                                                <h5>
                                                                    <span lassName="badge badge-danger">
                                                                        1
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="Medium">
                                                                Medium:
                                                                <h5>
                                                                    <span className="badge badge-warning">
                                                                        4
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="Low">
                                                                Low:
                                                                <h5>
                                                                    <span className="badge badge-primary">
                                                                        1
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="Maybe">
                                                                Maybe:
                                                                <h5>
                                                                    <span className="badge badge-info">
                                                                        5
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="Advice">
                                                                Advice:
                                                                <h5>
                                                                    <span className="badge badge-light">
                                                                        2
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="Okay">
                                                                Okay:
                                                                <h5>
                                                                    <span className="badge badge-success">
                                                                        4
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                            <td className="Skipped">
                                                                Skipped:
                                                                <h5>
                                                                    <span className="badge badge-secondary">
                                                                        2
                                                                    </span>
                                                                </h5>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===================================================*/}
                        {/*End page content*/}
                    </div>
                    {/*===================================================*/}
                    {/*END CONTENT CONTAINER*/}
                </div>




                <Footer />
            </div>
        );
    }
}
