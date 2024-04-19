interface Props {
  label: string;
  contain: string;
}
export const PatientDetailsItem = ({ contain, label }: Props) => {
  return (
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      {label}: <span className="font-normal normal-case">{contain}</span>
    </p>
  );
};
