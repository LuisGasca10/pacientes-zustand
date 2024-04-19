import {ToastContainer} from 'react-toastify';
import { PatientList } from "./components/PatientList";
import { PatientForm } from "./components/PatinetForm";
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Segumiento de Pacientes{" "}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm/>
          <PatientList/>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default App;