import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";

export function getEMSProtocolOptions() {
  return emsProtocols.map((complaint: IEMSComplaint) => ({
    value: complaint.name,
    label: complaint.name,
    protocol: complaint.protocol,
  }));
}

export const emsProtocols: IEMSComplaint[] = [
  {
    protocol: 1,
    name: "Abdominal Pain/Problems",
    shortName: "Abdo Pain",
    description: (
      <>
        <p>
          Key considerations for Abdominal Pain include patient alertness,
          pregnancy status for females of childbearing age, fainting/syncope,
          pain characteristics (especially ripping/tearing pain that may
          indicate aortic issues), and pain location.
        </p>
        <p className="mt-2">
          Pay special attention to age and gender factors, as they significantly
          impact determinant selection. For example, males over 35 with pain
          above the navel may require a higher response level due to increased
          cardiac risk.
        </p>
        <p className="mt-2">
          <span className="font-medium">REMEMBER:</span> Pain{" "}
          <span className="text-red-500 font-medium">above the navel</span> in
          older adults often signals greater risk, especially for cardiac or
          vascular emergencies. Use skin color (ashen/gray), fainting symptoms,
          and pain description to guide response escalation. Groin/testicular
          pain in males, while less urgent, still requires appropriate
          classification. Think in terms of:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-medium">Above Navel</span> + Age + Gender →
            Increased concern
          </li>
          <li>
            <span className="font-medium">Tearing Pain</span> → Possible
            vascular event
          </li>
          <li>
            <span className="font-medium">Not Alert / Fainting</span> →
            Prioritize immediately
          </li>
        </ul>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: false },
    ],
    defaultPriority: "A",
    defaultPlan: 1,
    defaultCode: "01A01",
    questions: [
      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        defaultTab: "qa",
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            questionDisplay:
              "**pronoun** is completely alert (responding appropriately)",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            questionDisplay:
              "**pronoun** is NOT completely alert (not responding appropriately)",
            updateCode: "01D01",
            continue: true,
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            questionDisplay:
              "It is unknown if **pronoun** is completely alert (responding appropriately)",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is she <b>pregnant</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const {
            patientAge: age,
            patientGender: gender,
            patientProximity: proximity,
          } = patient;
          return (
            age >= 12 &&
            age <= 50 &&
            gender === "female" &&
            proximity !== "first" &&
            proximity !== "fourth" &&
            proximity !== "third"
          );
        },
        preRenderDependenices: ["gender", "age"],
        preRenderLogic: "Females between the ages of 12 and 50",
        answers: [
          {
            answer: "No",
            display: "Not pregnant",
            questionDisplay: "She is not pregnant",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Pregnant",
            questionDisplay: "She is pregnant",
            gotoProtocol: 24,
          },
          {
            answer: "Unknown",
            display: "Unk if pregnant",
            questionDisplay: "It is unknown if she is pregnant",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are you <b>pregnant</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const {
            patientAge: age,
            patientGender: gender,
            patientProximity: proximity,
          } = patient;
          return (
            age >= 12 &&
            age <= 50 &&
            proximity === "first" &&
            gender === "female"
          );
        },
        preRenderLogic:
          "caller is the patient, they are female and between 12 and 50",
        answers: [
          {
            answer: "No",
            display: "She is not pregnant",
            questionDisplay: "It is unknown if she is pregnant",
            continue: true,
          },
          {
            answer: "Yes",
            display: "She is pregnant",
            questionDisplay: "She is pregnant",
            gotoProtocol: 24,
          },
          {
            answer: "Unknown",
            display: "Unk if pregnant",
            questionDisplay: "It is unknown if she is pregnant",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** appear ashen or gray?{" "}
            <span className="text-blue-400">(Compared to usual color)</span>
          </p>
        ),
        preRenderInstructions: (patient) => {
          const { patientAge: age } = patient;
          return age >= 50;
        },
        preRenderDependenices: ["age"],
        preRenderLogic: "Patients 50 and older",
        questionType: "select",
        defaultTab: "ai",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">CHANGING COLOR</h4>
            <p>
              Changing colors of <b>clinical significance</b> incide:
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-4">
              <li>Ashen/Gray</li>
              <li>Blue/Cyanotic/Purple</li>
              <li>Mottled</li>
            </ul>
            <p className="text-red-400">
              (Pale, pink, and red are not colors of clinical significance in
              the dispatch environment and will not, alone, change the dispatch
              priority. These answer choices in ProQA enable further study.
              Callers failing to initially identify a listed color should not be
              coached by asking unlisted clarifiers such as "Well, is she
              gray?")
            </p>
          </div>
        ),
        answers: [
          {
            answer: "No",
            continue: true,
            display: "Not ashen or gray",
            questionDisplay: "**pronoun** does not appear ashen or gray",
          },
          {
            answer: "Yes",
            display: "Ashen or gray",
            questionDisplay: "**pronoun** appears ashen or gray",
            updateCode: "01D02",
            continue: true,
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if ashen or gray",
            questionDisplay:
              "It is unknown if **pronoun** appears ashen or gray",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Did **pronoun** faint or pass out?{" "}
            <span className="text-blue-400">(Nearly)</span>
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Not fainted or feeling faint",
            questionDisplay: "**pronoun** has not fainted or feeling faint",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Fainted or feeling faint",
            questionDisplay: "**pronoun** has fainted or feeling faint",
            dependency: (patient) => {
              const { patientAge: age, patientGender: gender } = patient;
              if (age >= 50) {
                return { code: "01C03", send: true };
              } else if (age >= 12 && age <= 50 && gender === "female") {
                return { code: "01C04", send: true };
              }
            },
            dependencyDependencies: ["age", "gender"],
            dependencyLogic:
              "Females between the ages of 12 and 50 and patients 50 and older",
            continue: true,
          },
          {
            answer: "Unknown",
            questionDisplay:
              "It is unknown if **pronoun** has fainted or feeling faint",
            display: "Unk if fainted or feeling faint",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have a <b>diagnosed</b> aoritc aneurysm
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "No diagnosed aortic aneurysm",
            questionDisplay:
              "**pronoun** does not have a diagnosed aortic aneurysm",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diagnosed aortic aneurysm",
            questionDisplay: "**pronoun** has a diagnosed aortic aneurysm",
            continue: true,
            updateCode: "01C02",
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diagnosed aortic aneurysm",
            questionDisplay:
              "It is unknown if **pronoun** has a diagnosed aortic aneurysm",
            continue: true,
          },
        ],
      },

      {
        text: <p>Can you have the patient describe the pain?</p>,
        questionType: "select",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              PAIN QUALITY – BE ALERT FOR KEY DESCRIPTORS
            </h4>
            <p>
              The way the patient describes their pain can reveal
              life-threatening conditions.
            </p>
            <p className="mt-3">
              If the pain is described as <b>ripping or tearing</b>, especially
              in the back, chest, or abdomen, and the patient is{" "}
              <b>50 or older</b>, this may indicate a possible aortic
              dissection—a rare but deadly vascular emergency.
            </p>
            <p>
              This pain quality significantly increases concern for cardiac or
              vascular involvement and should be prioritized for emergency
              response.
            </p>

            <p className="mt-2 text-red-400">
              If "ripping/tearing" pain is mentioned by a patient aged 50 or
              older, it will trigger a higher-level response code.
            </p>
          </div>
        ),
        defaultTab: "ai",
        answers: [
          {
            answer: "Pain:",
            display: "{input} pn",
            questionDisplay: "**pronoun** describes the pain as {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Ripping/Tearing",
            display: "Ripping/Tearing pn",
            questionDisplay:
              "**pronoun** describes the pain as ripping/tearing",
            updateCode: "01C01",
            continue: true,
            dependency: (patient) => {
              if (!patient) return;
              const { patientAge: age } = patient;
              if (age >= 50) {
                return { code: "01C01", send: true };
              }
            },
            dependencyDependencies: ["age"],
            dependencyLogic: "Patients 50 and older",
          },
          {
            answer: "No",
            display: "Not able to describe pn",
            questionDisplay: "**pronoun** is not able to describe the pain",
            continue: true,
          },
        ],
      },

      {
        text: <p>Where is the pain located?</p>,
        questionType: "select",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              PAIN LOCATION MATTERS
            </h4>
            <p>
              The <b>navel</b> (belly button) is the small, central point on the
              abdomen where the umbilical cord was attached. It’s a useful
              reference to help identify the pain location.
            </p>
            <p className="mt-3">
              Pain <b>above the navel</b> is more likely to involve the heart,
              aorta, or other major organs. This can signal a serious medical
              emergency—especially in patients at increased cardiac risk.
            </p>
            <p>
              Pain <b>below the navel</b> is more often linked to
              gastrointestinal, urinary, or reproductive causes and is generally
              lower in immediate clinical risk.
            </p>

            <h5 className="text-sm font-semibold mt-4 text-muted-foreground">
              Increased Cardiac Risk:
            </h5>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                <b>Males ≥ 35</b> with pain above the navel
              </li>
              <li>
                <b>Females ≥ 45</b> with pain above the navel
              </li>
            </ul>

            <p className="mt-2 text-red-400">
              Do <b>not coach or lead</b> the caller by asking, “Well, is it
              above or below the belly button?” If they don’t know or can’t
              describe it, choose “Unknown.”
            </p>
          </div>
        ),
        defaultTab: "ai",
        answers: [
          {
            answer: "Below the navel",
            display: "Pn below the navel",
            questionDisplay: "**pronoun** has pain below the navel",
            end: true,
          },
          {
            answer: "Above the navel",
            display: "Pn above the navel",
            questionDisplay: "**pronoun** has pain above the navel",
            dependency: (patient) => {
              const { patientAge: age, patientGender: gender } = patient;
              if (gender === "male" && age >= 35) {
                return { code: "01C05", send: true };
              } else if (gender === "female" && age >= 45) {
                return { code: "01C06", send: true };
              }
            },
            dependencyDependencies: ["age", "gender"],
            dependencyLogic:
              "Females w/ Pain Above Navel (>= 45) and Males w/ Pain Above Navel (>= 35)",
            end: true,
          },
          {
            answer: "Other:",
            display: "Pn in {input}",
            questionDisplay: "**pronoun** has pain in {input}",
            input: true,
            end: true,
          },
          {
            answer: "Groin/Testical",
            preRenderInstructions: (patient) => {
              if (!patient) return false;
              const { patientGender: gender } = patient;
              return gender === "male";
            },
            display: "Pn in groin/testicles",
            questionDisplay: "He has pain in the groin/testicles",
            updateCode: "01A02",
            end: true,
          },
          {
            answer: "Unknown",
            display: "Unk where pn is",
            questionDisplay: "It is unknown where **pronoun** has pain",
            end: true,
          },
        ],
      },
    ],
    determinants: [
      {
        priority: "A",
        codes: [
          {
            code: "01A01",
            text: "General Abdominal Pain",
            recResponse: 1,
          },
          {
            code: "01A02",
            text: "Testical or Groin Pain (Male)",
            recResponse: 2,
          },
        ],
      },
      {
        priority: "C",
        codes: [
          {
            code: "01C00",
            text: "ALS Override (Charlie)",
            recResponse: 3,
          },
          {
            code: "01C01",
            text: "Suspected Aortic Aneurysm (Tearing/Ripping Pain) (>= 50)",
            recResponse: 3,
          },
          {
            code: "01C02",
            text: "Diagnosed Aortic Aneurysm",
            recResponse: 3,
          },
          {
            code: "01C03",
            text: "Fainting or Near Fainting (>= 50)",
            recResponse: 3,
          },
          {
            code: "01C04",
            text: "Females w/ Fainting or Near Fainting (12-50)",
            recResponse: 3,
          },
          {
            code: "01C05",
            text: "Males w/ Pain Above Navel (>= 35)",
            recResponse: 2,
          },
          {
            code: "01C06",
            text: "Females w/ Pain Above Navel (>= 45)",
            recResponse: 2,
          },
        ],
      },
      {
        priority: "D",
        codes: [
          {
            code: "01D00",
            text: "ALS Override (Delta)",
            recResponse: 3,
          },
          {
            code: "01D01",
            text: "Not Alert",
            recResponse: 3,
          },
          {
            code: "01D02",
            text: "Ashen or Gray Color (>= 50)",
            recResponse: 3,
          },
        ],
      },
    ],
  },
];
