import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";

interface EMSDLSProps {
  emsCase: IEMSCaseEntry;
}

export default function EMSDLS({ emsCase }: EMSDLSProps) {
  return (
    <div>
      <header className="w-full p-6 bg-blue-400/10 rounded-md">
        <h2 className="text-lg font-bold">
          <span className="text-blue-500">X21</span>
        </h2>
      </header>
    </div>
  );
}
