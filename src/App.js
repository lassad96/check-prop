import './App.css';
import Profile, { ImageChildren } from './component/profile/Profile';
import imageslt from './imageslt.jpg';
const App = () => {
  const hundleName = (fullName) => {
    alert(fullName)
  }
  return (
    <div style={{
      textAlign: "center",
      backgroundcolor: "red", position: "relative",
      display: "block", border: "2px solid black", borderRadius: "20px"
    }}>
      <Profile fullName='Tajouri Lassad' bio="Now I am studying fullstackjs" profession="Ingenieur" hundleName={hundleName} >

      <img src={imageslt} alt="Imagechildren" style={{ marginBottom: 20, marginTop: 10 }}></img></Profile>
   
      
    </div>
  )
}
export default App;