import { toast } from "react-toastify";
import { usePatientStore } from "../store/pacientes";
import { Patient } from "../types";
import { PatientDetailsItem } from "./PatientDetailsItem";

interface Props {
  patient: Patient;
}

export const PatientDetails = ({ patient }: Props) => {
  const deletePatient = usePatientStore((store) => store.deletePatient);
  const getPatientById = usePatientStore((store) => store.getPatientById);

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault()
  deletePatient(patient.id);
  toast('Paciente Eliminado',{
    type:"error"
  });
};

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
      <PatientDetailsItem label="ID" contain={patient.id} />
      <PatientDetailsItem label="Nombre" contain={patient.name} />
      <PatientDetailsItem label="propietario" contain={patient.caretaker} />
      <PatientDetailsItem label="email" contain={patient.email} />
      <PatientDetailsItem
        label="Fecha alta"
        contain={patient.date.toString()}
      />
      <PatientDetailsItem label="sintomas" contain={patient.symptoms} />

      <div className="flex flex-col md:flex-row justify-between mt-10">
        <button
          type="button"
          onClick={()=> getPatientById(patient.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-colors"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
