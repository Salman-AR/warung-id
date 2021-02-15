import React,{useState,useEffect} from 'react';
import Icon from "./img/icon.jpg";
import Hp from "./img/login-form.png";
import Lain from "./img/lain.jpg";
import Centang from "./img/centang.png";
import Top from "./img/wave.svg";
import Bottom from "./img/wave-bottom.svg";
import Playstore from "./img/playstore.png";
import Appstore from "./img/appstore.png";
import Restoran from "./img/restoran.jpg";
import Pesan from "./img/carapesan.jpg";
import Sembako from "./img/sembako.png";
import Perabot from "./img/sapu.png";
import Elektronik from "./img/alat-elektronik.png";
import Listrik from "./img/listrik.png";
import Masak from "./img/masak.jpg";
import Paket from "./img/paket.png";
import Profile0 from "./img/profile1.png";
import Profile1 from "./img/profile.jpg";
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import Axios from "axios";
import { Bounce } from 'react-activity';
import './App.css';
import 'react-activity/dist/react-activity.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const barang =[
  {nama:'Sembako',gambar:Sembako},
  {nama:'Perabotan Rumah Tangga',gambar:Perabot},
  {nama:'Alat Elektronik',gambar:Elektronik},
  {nama:'Token Listrik',gambar:Listrik},
  {nama:'Alat Masak',gambar:Masak},
  {nama:'Lain-lain',gambar:Lain},
]

const App = (item) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const userFunction = async () => {
    try {
      const data = await Axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then (res => {
        console.log(res);
        setUsers(res.data)
      });
      setLoading(true)
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    userFunction()
  }, []);
  return(
    <>
    {loading ? <>
    <Navbar expand="lg">
      <div className="navbar container">
        <Navbar.Brand href="#home" className="mt-n1 brand pacifico"><img alt="" src={Icon} className="icon d-inline-block align-top"/>{" "}Warung.ID</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#link" className="navlink h6 active">Home</Nav.Link>
            <Nav.Link href="#link" className="navlink h6">Cara Pesan</Nav.Link>
            <Nav.Link href="#link" className="navlink h6">Syarat & Ketentuan</Nav.Link>
            <Nav.Link href="#link" className="navlink h6">Tentang</Nav.Link>
            <Button href="#link" variant="warning" className="btn-link h6 tombol">Log in</Button>
          </Nav>
        </Navbar.Collapse>
      </div> 
    </Navbar> 

    <div className="container-fluid">
      <Jumbotron className="jumbotron text-center">
        <h1 className="pacifico"><img src={Icon} alt=" " width='100px' height='100%'/>{" "}Warung.ID</h1>
        <p className="mt-4">Order Makanan Tanpa Ribet Antri</p>
        <Button variant="warning"  className="tombol">Pesan Sekarang</Button>
      </Jumbotron>
    </div>

    <div className="header container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="text-warning text-center text-md-left">Pesan Makanan Mudah, Cepat dan Hemat Tenaga</h2>
          <h5 className="">Warung.ID memudahkan anda memesan makanan dan belanja barang kebutuhan tanpa mengantri</h5>  
        </div>
        <div>
          <img src={Restoran} alt=" " className="d-none d-sm-none d-md-inline float-right" width="80%%"/>
        </div>
      </div>
      <div className="row">
        <div col-lg-6 className="store font-weight-bold">
          <img src={Playstore} alt=" " width="200px"/>{' '}or
          <img src={Appstore} alt=" " width="180px" className="ml-4 pb-1"/>
        </div>
      </div>  
    </div>

    <div className='cara container text-center'>
      <h2 className='mb-5 text-warning align-bottom' ><img src={Pesan} alt=" " width="55px" className="d-none d-sm-none"/>{' '}Cara Pemesanan Sangat Mudah</h2>
      <div className="row m-2">
        <div className="col d-none d-sm-none d-md-block">
          <img src={Hp} alt=" " width='100%' className=""/>
        </div>
        <div className="col my-auto">
          <p className="list alert alert-warning">Buka Warung.ID</p>
          <p className="list alert alert-warning">Login Akun Anda</p>
          <p className="list alert alert-warning">Pilih Warung Terdekat</p>
          <p className="list alert alert-warning">Pesan Makanan</p>
          <p className="list alert alert-warning">Bayar</p>
        </div>
      </div>
      <h3 className="text-center text-warning">Simpel Bukan? Tunggu Apa Lagi</h3>
      <Button className="tombol mt-4" variant="warning">Pesan Sekarang</Button>
    </div>

    <div className="fitur text-center container w-75 rounded-lg text-light p-2 mx-auto my-2">
      <h2 className="font-weight-bolder my-4 mx-1"><img src={Centang} alt=" " className="rounded-circle d-none d-sm-none d-md-inline" width="50px"/>{' '}Tersedia Berbagai Fitur Menarik</h2>
      <div className="row text-left justify-content-center">
        <div className="fitur-box col-lg-10 my-3">
          <ul className="">
            <li className="my-2 font-weight-bolder border-bottom border-light">Cara Pesan Yang Mudah</li>
            <li className="my-2 font-weight-bolder border-bottom border-light">Bisa Antar Sampai Rumah</li>
            <li className="my-2 font-weight-bolder border-bottom border-light">Berbagai Methode Pembayaran</li>
            <li className="my-2 font-weight-bolder border-bottom border-light">Diskon Besar Setiap Bulannya</li>
            <li className="my-2 font-weight-bolder border-bottom border-light">Dan Masih Banyak Lagi..</li>
          </ul>
        </div>
      </div>
      <Button variant="outline-warning" className="font-weight-bolder bg-white">Coba Sekarang</Button>
    </div>

    <div className="barang container-fluid">
      <h2 className="text-center text-warning mb-5"><img src={Paket} alt='' width="70px" className="d-none d-sm-none d-md-inline"/>{' '}Berbagai Barang Kebutuhan</h2>
      <div className='card-box'>
          {barang.map((item) => {
            return(<>
            <div className='card kotak text-center m-1'>
              <div className='card-body'>
                <div className='about-contents'>
                  <img alt="" src={item.gambar} width="80px" height="100%" className="d-inline-block" style={{borderRadius:'100px'}}/>
                  <p className="card-title">{item.nama}</p>
                  <Button variant='warning' className='tombol'>Pesan Sekarang</Button>
                </div>
              </div>
            </div>
            </>
          )})}
      </div>
    </div>

    <div className="about">
      <img src={Top} alt=" "/>
      <div className="container-fluid text-white about-content my-n2">
        <h2 className="text-center mb-5">Penasaran Tentang Kami?</h2>
        <h4><span className="pacifico">Warung.ID</span> - Salah satu Aplikasi yang memudahkan kita saat memesan makanan, untuk kedepannya mungkin kami akan memperbanyak fitur untuk mempermudah kehidupan kita sehari" dan dengan tampilan yang lebih keren lagi pastinya. Saya juga mungkin akan berkerja sama dengan berbagai developmener untuk mengembangkan aplikasi tercinta kita ini. Semoga aplikasi ini dapat membantu anda dalam menjalankan kehidupan yang lebih mudah</h4>
      </div>
      <img src={Bottom} alt=" "/>
    </div>
 
    <div className="container comment my-n2">
      <div class="media shadow-lg p-4 mb-5 rounded-lg bg-white">
        <img src={Profile0} class="mr-3 rounded-circle" width="60px" alt="..."/>
        <div class="media-body">
          <h5 class="mt-0">Affan Harisyah Zaen</h5>
          Aplikasinya Sangat membantu saya dalam memenuhi kebutuhan sehari-hari, saya jadi lebih mudah beli berbagai macam kebutuhan, teruskan lagi aplikasinya saya harap ada fitur-fitur menarik kedepannya
          <div class="media mt-3">
            <a class="mr-3" href="#">
              <img src={Profile1} class="rounded-circle" width="60px" alt="..."/>
            </a>
            <div class="media-body">
              <h5 class="mt-0">Salman Ar</h5>
              Terima Kasih, telah mensupport kami Tim WarungID, kami akan berusaha semaksimal mungkin untuk membuat anda puas dengan pelayanan kami
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <div className="akhir container">
      <div className="text-center">
        <h1>Ayo Tunggu Apa Lagi <br/>Pesan Sekarang</h1>
        <Button variant="warning" className="tombol px-3 m-3">Klik Disini</Button>
      </div>
    </div>
 
    <div className="container-fluid text-white bg-dark pt-5 pb-2 px-5">
      <div className="row">
        <div className="col-5 offset-md-1">
          <h3 className="pacifico">Warung.ID</h3>
        </div>
        <div className="col-5 text-right">
          <p>JL. Ade Irma Suryani No. 1</p>
        </div>
      </div>
      <hr/>
      <p className="text-left copy">Copyright © WarungID . All rights reserved</p>
    </div>

    <div className="overflow-auto">    
      <ul className="container-fluid">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">phone</th>
              <th scope="col">website</th>
              <th scope="col">company</th>
            </tr>
          </thead>
          {users.map((users) => {
            return(
            <tbody key={users}>
              <tr>
                <th scope="row">{users.id}</th>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.address.street}, {users.address.suite}, {users.address.city}, ({users.address.zipcode})</td>
                <td>{users. phone}</td>
                <td>{users.website}</td>
                <td>{users.company.name}</td>
              </tr>
            </tbody>
            )
          })}
        </table>
      </ul> 
    </div></>
  : <div className="text-center align-middle" style={{padding:'200px'}}><Bounce className="m-2"color="#ffcc33" size={40} speed={1} animating={true} /><br/>
      loading ....
    </div> }
    </>
  )
};

export default App;