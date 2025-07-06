import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";

export function getEMSProtocolOptions() {
  return emsProtocols.map((complaint: IEMSComplaint) => ({
    value: complaint.name,
    label: complaint.name,
    protocol: complaint.protocol,
  }));
}

export const emsProtocols: IEMSComplaint[] = [
  // Reviewed and signed off on - Pre PDI
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
              "Unk if **pronoun** is completely alert (responding appropriately)",
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
        preRenderDependencies: ["gender", "age"],
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
            questionDisplay: "Unk if she is pregnant",
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
          "Caller is the patient and they are female and between 12 and 50",
        preRenderDependencies: ["gender", "age"],
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
            questionDisplay: "Unk if she is pregnant",
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
          const { patientAge: age, patientProximity: proximity } = patient;
          return age >= 50 && proximity !== "first";
        },
        preRenderDependencies: ["age", "proximity"],
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
            questionDisplay: "Unk if **pronoun** appears ashen or gray",
            continue: true,
          },
        ],
      },

      {
        text: <p>Has your skin color changed color?</p>,
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientAge: age, patientProximity: proximity } = patient;
          return proximity === "first" && age >= 50;
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is the patient",
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
        omit: true,
        answers: [
          {
            answer: "No",
            display: "No skin color change",
            questionDisplay: "**pronoun** rpts no skin color change",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Skin color changed",
            questionDisplay: "**pronoun** rpts skin color changed",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if skin color changed",
            questionDisplay:
              "Unk if **pronoun** has had a change in skin color",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What <b>color</b> is your skin?{" "}
            <span className="text-blue-400">(Compared to normal)</span>
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient, answers) => {
          const { patientAge: age, patientProximity: proximity } = patient;
          if (proximity !== "first" || age < 50) return false;
          const lastAnswer = answers[answers.length - 1].answer;
          return lastAnswer === "Yes";
        },
        preRenderDependencies: ["proximity", "answers"],
        preRenderLogic:
          "Caller is the patient and has a change in skin color and is a first party caller",
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
            answer: "Ashen/Gray",
            display: "Ashen or Gray skin color",
            questionDisplay: "**pronoun** has ashen or gray skin color",
            updateCode: "01D02",
            continue: true,
            send: true,
          },
          {
            answer: "Other:",
            display: "Skin color is {input}",
            questionDisplay: "**pronoun** has skin color of {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if skin color changed",
            questionDisplay:
              "Unk if **pronoun** has had a change in skin color",
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
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity !== "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is not the patient",
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
            questionDisplay: "Unk if **pronoun** has fainted or feeling faint",
            display: "Unk if fainted or feeling faint",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Have you <b>fainted</b> or <b>passed out</b>?{" "}
            <span className="text-blue-400">(Nearly)</span>
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity === "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is the patient",
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
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity !== "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is not the patient",
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
              "Unk if **pronoun** has a diagnosed aortic aneurysm",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Do you have a <b className="font-bold">diagnosed</b> aortic
            aneurysm?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity === "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is the patient",
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
              "Unk if **pronoun** has a diagnosed aortic aneurysm",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** able to <b>describe</b> the <b>pain</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity !== "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is not the patient",
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
        text: (
          <p>
            Are you able to <b>describe</b> the <b>pain</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity === "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is the patient",
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
            preRenderDependencies: ["gender"],
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
  // Reviewed and signed off on - Pre PDI
  {
    protocol: 2,
    name: "Allergies (Reactions) / Envenomations (Stings, Bites)",
    shortName: "Allergies",
    description: (
      <>
        <p>
          Allergic Reactions and Envenomations require immediate assessment of
          airway status, especially signs of ineffective or agonal
          breathing—these indicate a life-threatening condition and mandate an
          Echo-level response. Consciousness and the ability to speak between
          breaths are also early critical factors for triage escalation.
        </p>

        <p className="mt-2">
          If the patient is having{" "}
          <span className="font-medium">
            difficulty breathing or swallowing
          </span>
          , particularly with a known allergy history, you should assume a
          rapidly progressing airway compromise until proven otherwise. Past
          reactions, even if mild, increase risk for future severe responses.
          Injection use (e.g., EpiPen) or medications may be noted but{" "}
          <i>do not</i> guarantee symptom relief—severity must still be
          evaluated based on current presentation.
        </p>

        <p className="mt-2">
          Understanding the{" "}
          <span className="font-medium">cause of the reaction</span> is vital.
          Swarming insect attacks (multiple stings) are higher-risk due to
          cumulative venom exposure. Bites from snakes or spiders require
          consideration for systemic toxicity. Always ask about time of onset,
          previous allergic history, and any interventions already taken (like
          injections or medications) to ensure accurate coding and proper
          resource dispatch.
        </p>

        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="font-medium">Ineffective or Agonal Breathing</span>{" "}
            → Echo-level emergency
          </li>
          <li>
            <span className="font-medium">
              Difficulty Speaking Between Breaths
            </span>{" "}
            → Delta concern
          </li>
          <li>
            <span className="font-medium">Swarming Attack / Snakebite</span> →
            High-priority Delta determinant
          </li>
          <li>
            <span className="font-medium">Prior Allergy Hx</span> → Escalates
            concern, especially with breathing issues
          </li>
          <li>
            <span className="font-medium">Injection or Medication Taken</span> →
            May trigger sub-code but doesn’t reduce urgency
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
    defaultPlan: 4,
    defaultCode: "02A03",
    questions: [
      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Yes",
            display: "Responding nlly",
            questionDisplay:
              "**pronoun** is completely alert and responding appropriately",
            continue: true,
          },
          {
            answer: "No",
            display: "NOT responding nlly",
            questionDisplay:
              "**pronoun** is not completely alert and not responding appropriately",
            continue: true,
            updateCode: "02D01",
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            questionDisplay:
              "Unk if **pronoun** is completely alert and responding appropriately",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** having difficulty{" "}
            <b className="font-bold">breathing</b> or{" "}
            <b className="font-bold">swallowing</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity !== "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is not the patient",
        answers: [
          {
            answer: "No",
            display: "Not diff breathing or swallowing",
            questionDisplay:
              "**pronoun** is not having difficulty breathing or swallowing",
            continue: true,
            updateCode: "02A01",
          },
          {
            answer: "Yes",
            display: "Diff breathing or swallowing",
            questionDisplay:
              "**pronoun** is having difficulty breathing or swallowing",
            continue: true,
            updateCode: "02C01",
            send: true,
          },
          {
            answer: "INEFFECTIVE/AGONAL BREATHING",
            display: "Ineffective or agonal breathing",
            questionDisplay:
              "**pronoun** is having ineffective or agonal breathing",
            continue: true,
            updateCode: "02E01",
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing or swallowing",
            questionDisplay:
              "Unk if **pronoun** is having difficulty breathing or swallowing",
            continue: true,
            updateCode: "02B01",
          },
        ],
      },

      {
        text: (
          <p>
            Are you having difficulty <b className="font-bold">breathing</b> or{" "}
            <b className="font-bold">swallowing</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity === "first";
        },
        preRenderDependencies: ["proximity"],
        preRenderLogic: "Caller is the patient",
        answers: [
          {
            answer: "No",
            display: "Not diff breathing or swallowing",
            questionDisplay:
              "**pronoun** is not having difficulty breathing or swallowing",
            continue: true,
            updateCode: "02A01",
          },
          {
            answer: "Yes",
            display: "Diff breathing or swallowing",
            questionDisplay:
              "**pronoun** is having difficulty breathing or swallowing",
            continue: true,
            updateCode: "02C01",
            send: true,
          },
          {
            answer: "INEFFECTIVE/AGONAL BREATHING",
            display: "Ineffective or agonal breathing",
            questionDisplay:
              "**pronoun** is having ineffective or agonal breathing",
            continue: true,
            updateCode: "02E01",
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing or swallowing",
            questionDisplay:
              "Unk if **pronoun** is having difficulty breathing or swallowing",
            continue: true,
            updateCode: "02B01",
          },
        ],
      },

      {
        text: <p>Is **pronoun** having difficulty speaking between breaths?</p>,
        questionType: "select",
        preRenderInstructions: (patient, answers) => {
          const { patientProximity: proximity } = patient;
          const lastAnswer = answers[answers.length - 1].answer;
          return proximity !== "first" && lastAnswer === "Yes";
        },
        preRenderDependencies: ["proximity", "answers"],
        preRenderLogic: "Caller is not the patient",
        defaultTab: "ai",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              DIFFICULTY SPEAKING BETWEEN BREATHS
            </h4>
            <p>Can also be described as:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-4">
              <li>
                Unable to <b className="font-bold">complete a full sentence</b>{" "}
                without taking a breath
              </li>
              <li>
                Only able to <b className="font-bold">speak a few words</b>{" "}
                without taking a breath
              </li>
              <li>
                Breathing attempts that{" "}
                <b className="fond-bold">severely hinder</b> crying in infants
                and small children
              </li>
            </ul>
          </div>
        ),
        answers: [
          {
            answer: "No",
            display: "Not diff speaking between breaths",
            questionDisplay:
              "**pronoun** is not having difficulty speaking between breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking between breaths",
            questionDisplay:
              "**pronoun** is having difficulty speaking between breaths",
            continue: true,
            updateCode: "02D02",
            send: true,
            overrideSend: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking between breaths",
            questionDisplay:
              "Unk if **pronoun** is having difficulty speaking between breaths",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <span className="text-blue-400">(If not obvious)</span> Are you
            having difficulty speaking between breaths?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient, answers) => {
          const { patientProximity: proximity } = patient;
          const lastAnswer = answers[answers.length - 1].answer;
          return proximity === "first" && lastAnswer === "Yes";
        },
        preRenderDependencies: ["proximity", "answers"],
        preRenderLogic: "Caller is the patient",
        answers: [
          {
            answer: "No",
            display: "Not diff speaking between breaths",
            questionDisplay:
              "**pronoun** is not having difficulty speaking between breaths",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff speaking between breaths",
            questionDisplay:
              "**pronoun** is having difficulty speaking between breaths",
            continue: true,
            updateCode: "02D02",
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff speaking between breaths",
            questionDisplay:
              "Unk if **pronoun** is having difficulty speaking between breaths",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have any other <b>symptoms</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions(patient, answers) {
          const { patientProximity: proximity } = patient;
          const lastAnswer = answers.find(
            (a) =>
              a.question ===
              "Are you having difficulty breathing or swallowing?"
          )?.answer;
          return proximity !== "first" && lastAnswer === "No";
        },
        preRenderLogic: "Caller is not the patient",
        preRenderDependencies: ["proximity", "answers"],
        answers: [
          {
            answer: "No",
            display: "No symptoms rptd",
            questionDisplay: "**pronoun** does not have any other symptoms",
            continue: true,
            updateCode: "02A03",
          },
          {
            answer: "Swelling",
            display: "Swelling rptd",
            questionDisplay: "**pronoun** is having swelling",
            continue: true,
          },
          {
            answer: "Hives",
            display: "Hives rptd",
            questionDisplay: "**pronoun** is having hives",
            continue: true,
          },
          {
            answer: "Rash",
            display: "Rash rptd",
            questionDisplay: "**pronoun** is having a rash",
            continue: true,
          },
          {
            answer: "Other:",
            display: "Other symptoms: {input}",
            questionDisplay: "**pronoun** is having other sx: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if other symptoms",
            questionDisplay: "Unk if **pronoun** has any other symptoms",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Do you have any other <b>symptoms</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions(patient, answers) {
          const { patientProximity: proximity } = patient;
          const lastAnswer = answers.find(
            (a) =>
              a.question ===
              "Are you having difficulty breathing or swallowing?"
          )?.answer;
          return proximity === "first" && lastAnswer === "No";
        },
        preRenderLogic: "Caller is the patient",
        preRenderDependencies: ["proximity", "answers"],
        answers: [
          {
            answer: "No",
            display: "No symptoms rptd",
            questionDisplay: "**pronoun** does not have any other symptoms",
            continue: true,
            updateCode: "02A03",
          },
          {
            answer: "Swelling",
            display: "Swelling rptd",
            questionDisplay: "**pronoun** is having swelling",
            continue: true,
          },
          {
            answer: "Hives",
            display: "Hives rptd",
            questionDisplay: "**pronoun** is having hives",
            continue: true,
          },
          {
            answer: "Rash",
            display: "Rash rptd",
            questionDisplay: "**pronoun** is having a rash",
            continue: true,
          },
          {
            answer: "Other:",
            display: "Other symptoms: {input}",
            questionDisplay: "**pronoun** is having other sx: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if other symptoms",
            questionDisplay: "Unk if **pronoun** has any other symptoms",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What <b className="font-bold">caused</b> or{" "}
            <b className="font-bold">led up to</b> the reaction?
          </p>
        ),
        questionType: "select",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              IDENTIFYING THE CAUSE
            </h4>
            <p>
              Understanding what caused or triggered the allergic reaction helps
              determine the severity and the appropriate response level.
            </p>

            <h5 className="text-sm font-semibold mt-3 text-muted-foreground">
              HIGH-RISK CAUSES:
            </h5>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                <b className="text-red-500">Swarming Attack</b>: This refers to
                an attack by multiple stinging insects at once—commonly bees,
                wasps, or hornets. Repeated stings can rapidly cause{" "}
                <b>anaphylaxis</b>, swelling of the airway, or circulatory
                collapse. This is treated as a <b>life-threatening emergency</b>
                .
              </li>
              <li>
                <b className="text-red-500">Snakebite</b>: Even a single bite
                from a venomous snake can inject life-threatening venom,
                potentially causing{" "}
                <b>allergic reactions, bleeding, paralysis, or shock</b>.
                Snakebites always require immediate, high-priority dispatch.
              </li>
              <li>
                <b>Spider bites</b>: Some species can cause medically
                significant symptoms such as swelling, nausea, or localized
                tissue damage. Reactions vary based on species.
              </li>
              <li>
                <b>Food-related reactions</b>: Common triggers include peanuts,
                shellfish, dairy, and eggs. These are the leading causes of
                anaphylaxis and airway compromise.
              </li>
            </ul>

            <p className="mt-2">
              If the caller knows the specific trigger (e.g., “peanut,” “bee
              sting,” “shrimp”), be sure to <b>record that detail</b> using the
              input field provided.
            </p>

            <p className="mt-2 text-red-400">
              Do <b>not coach</b> the caller into selecting a specific cause.
              Avoid leading questions like “Was it a spider or a snake?” —
              always let the caller provide the information naturally.
            </p>
          </div>
        ),
        defaultTab: "ai",
        answers: [
          {
            answer: "Food:",
            display: "Rx caused by food: {input}",
            questionDisplay: "The reaction is/was caused by food: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Insect Sting/Bite:",
            display: "Rx caused by insect sting/bite: {input}",
            questionDisplay:
              "The reaction is/was caused by insect sting/bite: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Spider Bite",
            display: "Rx caused by spider bite",
            questionDisplay: "The reaction is/was caused by spider bite",
            continue: true,
            updateCode: "02A02",
          },
          {
            answer: "SWARMING ATTACK",
            display: "Rx caused by SWARMING ATTACK",
            questionDisplay: "The reaction is/was caused by a swarming attack",
            continue: true,
            updateCode: "02D03",
            send: true,
          },
          {
            answer: "SNAKEBITE",
            display: "Rx caused by snakebite",
            questionDisplay: "The reaction is/was caused by a snakebite",
            continue: true,
            updateCode: "02D04",
            send: true,
          },
          {
            answer: "Other:",
            display: "Rx caused by {input}",
            questionDisplay: "The reaction is/was caused by {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk cause of rx",
            questionDisplay: "Unk what caused the reaction",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            <b className="font-bold">When</b> did the reaction start?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Time of rx:",
            display: "Rx started {input}",
            questionDisplay: "The reaction started {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk when rx started",
            questionDisplay: "Unk when the reaction started",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have a{" "}
            <b className="font-bold">history of allergic reactions</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity !== "first";
        },
        preRenderLogic: "Caller is not the patient",
        preRenderDependencies: ["proximity"],
        answers: [
          {
            answer: "No",
            display: "No hx of allergic rx",
            questionDisplay:
              "**pronoun** does not have a history of allergic reactions",
            continue: true,
          },
          {
            answer: "Yes - Mild",
            display: "Hx of mild allergic rx",
            questionDisplay: "**pronoun** has a history of allergic reactions",
            continue: true,
          },
          {
            answer: "Yes - SEVERE",
            display: "Hx of severe allergic rx",
            questionDisplay:
              "**pronoun** has a history of severe allergic reactions",
            continue: true,
            updateCode: "02C02",
          },
          {
            answer: "Unknown",
            display: "Unk hx of allergic rx",
            questionDisplay:
              "Unk if **pronoun** has a history of allergic reactions",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Do you have a{" "}
            <b className="font-bold">history of allergic reactions</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity === "first";
        },
        preRenderLogic: "Caller is the patient",
        preRenderDependencies: ["proximity"],
        answers: [
          {
            answer: "No",
            display: "No hx of allergic rx",
            questionDisplay:
              "**pronoun** does not have a history of allergic reactions",
            continue: true,
          },
          {
            answer: "Yes - Mild",
            display: "Hx of mild allergic rx",
            questionDisplay:
              "**pronoun** has a history of mild allergic reactions",
            continue: true,
          },
          {
            answer: "Yes - SEVERE",
            display: "Hx of severe allergic rx",
            questionDisplay:
              "**pronoun** has a history of severe allergic reactions",
            continue: true,
            updateCode: "02C02",
          },
          {
            answer: "Unknown",
            display: "Unk hx of allergic rx",
            questionDisplay:
              "Unk if **pronoun** has a history of allergic reactions",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** take any <b className="font-bold">medications</b>{" "}
            or have <b className="fond-bold">an injection</b> for this type of
            reaction?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity !== "first";
        },
        preRenderLogic: "Caller is not the patient",
        preRenderDependencies: ["proximity"],
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              MEDICATIONS & INJECTIONS FOR ALLERGIC REACTIONS
            </h4>
            <p>
              This question helps determine if the patient is known to have{" "}
              <b>severe allergies</b>
              and is <b>
                prepared with medication or an epinephrine injection
              </b>{" "}
              (e.g., EpiPen). These details help responders anticipate treatment
              needs.
            </p>

            <h5 className="text-sm font-semibold mt-3 text-muted-foreground">
              Includes:
            </h5>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                <b>Injections:</b> Epinephrine (EpiPen, Auvi-Q, Adrenaclick)
              </li>
              <li>
                <b>Medications:</b> Antihistamines (e.g., Benadryl), oral
                steroids, etc.
              </li>
            </ul>

            <p className="mt-2 text-red-400">
              Do <b>not assume</b> the caller knows the specific name of the
              medication or device. Accept general responses like “yes, she has
              an EpiPen” or “he takes allergy pills.”
            </p>
          </div>
        ),
        answers: [
          {
            answer: "No",
            display: "No meds or injection for rx",
            questionDisplay:
              "**pronoun** does not take any medications or have an injection for this type of reaction",
            continue: true,
          },
          {
            answer: "Yes - Injection",
            display: "Injection for rx",
            questionDisplay:
              "**pronoun** takes an injection for this type of reaction",
            continue: true,
          },
          {
            answer: "Yes - Medication",
            display: "Medication for rx",
            questionDisplay:
              "**pronoun** takes medication for this type of reaction",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if meds or injection for rx",
            questionDisplay:
              "Unk if **pronoun** takes any medications or has an injection for this type of reaction",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Do you take any <b className="font-bold">medications</b> or have an{" "}
            <b className="fond-bold">injection</b> for this type of reaction?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientProximity: proximity } = patient;
          return proximity === "first";
        },
        preRenderLogic: "Caller is the patient",
        preRenderDependencies: ["proximity"],
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              MEDICATIONS & INJECTIONS FOR ALLERGIC REACTIONS
            </h4>
            <p>
              This question helps determine if the patient is known to have{" "}
              <b>severe allergies</b>
              and is <b>
                prepared with medication or an epinephrine injection
              </b>{" "}
              (e.g., EpiPen). These details help responders anticipate treatment
              needs.
            </p>

            <h5 className="text-sm font-semibold mt-3 text-muted-foreground">
              Includes:
            </h5>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                <b>Injections:</b> Epinephrine (EpiPen, Auvi-Q, Adrenaclick)
              </li>
              <li>
                <b>Medications:</b> Antihistamines (e.g., Benadryl), oral
                steroids, etc.
              </li>
            </ul>

            <p className="mt-2 text-red-400">
              Do <b>not assume</b> the caller knows the specific name of the
              medication or device. Accept general responses like “yes, she has
              an EpiPen” or “he takes allergy pills.”
            </p>
          </div>
        ),
        answers: [
          {
            answer: "No",
            display: "No meds or injection for rx",
            questionDisplay:
              "**pronoun** does not take any medications or have an injection for this type of reaction",
            continue: true,
          },
          {
            answer: "Yes - Injection",
            display: "Injection for rx",
            questionDisplay:
              "**pronoun** takes an injection for this type of reaction",
            continue: true,
          },
          {
            answer: "Yes - Medication",
            display: "Medication for rx",
            questionDisplay:
              "**pronoun** takes medication for this type of reaction",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if meds or injection for rx",
            questionDisplay:
              "Unk if **pronoun** takes any medications or has an injection for this type of reaction",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are you <span className="text-blue-400">(or the patient)</span> able
            to <b className="font-bold">use</b> the injection/medication?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient, answers) => {
          const lastAnswer = answers[answers.length - 1].answer;
          return (
            lastAnswer === "Yes - Injection" ||
            lastAnswer === "Yes - Medication"
          );
        },
        preRenderDependencies: ["answers"],
        preRenderLogic: "Injection or Medication was taken",
        answers: [
          {
            answer: "Yes",
            display: "Able to use injection/medication",
            questionDisplay:
              "**pronoun** is able to use the injection or medication",
            dependency(_patient, answers, currentCode) {
              if (currentCode.includes("02A")) return;
              const lastAnswer = answers[answers.length - 1].answer;
              if (lastAnswer === "Yes - Injection") {
                return { subCode: "I" };
              } else if (lastAnswer === "Yes - Medication") {
                return { subCode: "M" };
              }
            },
            continue: true,
          },
          {
            answer: "No",
            display: "Not able to use injection/medication",
            questionDisplay:
              "**pronoun** is not able to use the injection or medication",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if able to use injection/medication",
            questionDisplay:
              "Unk if **pronoun** is able to use the injection or medication",
            continue: true,
          },
        ],
      },
    ],
    determinants: [
      {
        priority: "A",
        codes: [
          {
            code: "02A01",
            text: "No Diff Breathing or Swallowing",
            recResponse: 4,
          },
          {
            code: "02A02",
            text: "Spider Bite",
            recResponse: 5,
          },
          {
            code: "02A03",
            text: "Asymptomatic Allergic Rx",
            recResponse: 5,
          },
        ],
      },
      {
        priority: "B",
        codes: [
          {
            code: "02B00",
            text: "BLS Override (Bravo)",
            recResponse: 4,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 4,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 4,
              },
            ],
          },
          {
            code: "02B01",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 4,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 4,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 4,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        codes: [
          {
            code: "02C00",
            text: "ALS Override (Charlie)",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02C01",
            text: "Diff Breathing or Swallowing",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02C02",
            text: "Hx of Severe Allergic Rx",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        codes: [
          {
            code: "02D00",
            text: "ALS Override (Delta)",
            recResponse: 7,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 7,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 7,
              },
            ],
          },
          {
            code: "02D01",
            text: "Not Alert",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02D02",
            text: "Diff Speaking Between Breaths",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02D03",
            text: "Swarming Attack (Bees, Wasps, Hornets)",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
          {
            code: "02D04",
            text: "Snakebite",
            recResponse: 6,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
        ],
      },
      {
        priority: "E",
        codes: [
          {
            code: "02E00",
            text: "ALS Override (Echo)",
            recResponse: 8,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 8,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 8,
              },
            ],
          },
          {
            code: "02E01",
            text: "INEFFECTIVE BREATHING",
            recResponse: 8,
            notBreathing: true,
            subCodes: [
              {
                suffix: "I",
                text: "Injection Administered or Advised",
                recResponse: 6,
              },
              {
                suffix: "M",
                text: "Medication Administered or Advised",
                recResponse: 6,
              },
            ],
          },
        ],
      },
    ],
  },
  // Reviewd and signed off on - Pre PDI
  {
    protocol: 3,
    name: "Animal Bites/Attacks",
    shortName: "Animal Bite",
    description: (
      <>
        <p>
          Animal bites can range from minor punctures to life-threatening
          trauma— it’s essential to identify{" "}
          <span className="text-red-500 font-semibold">attack severity</span>{" "}
          and
          <span className="text-red-500 font-semibold"> scene safety</span>{" "}
          early. Immediate danger (e.g., attack still in progress) must prompt a
          high-level response and consideration for{" "}
          <span className="text-yellow-400 font-semibold">law enforcement</span>{" "}
          dispatch.
        </p>

        <p className="mt-2">
          Focus on the <span className="font-medium">type of animal</span> and
          the
          <span className="font-medium"> area of the body affected</span>.
          Injuries to the
          <span className="text-red-400 font-semibold">
            {" "}
            head, neck, or chest
          </span>{" "}
          carry heightened risk of airway compromise, bleeding, or neurological
          involvement. Large or exotic animals also present a greater likelihood
          of deep trauma or envenomation.
        </p>

        <p className="mt-2">Look for these **red flags** during questioning:</p>

        <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
          <li>
            <span className="text-red-500 font-semibold">Ongoing attack</span>{" "}
            or unknown animal location → scene may still be unsafe
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Bites to the airway
            </span>{" "}
            or face/chest → high risk of compromised breathing
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Multiple animals or mauling
            </span>{" "}
            → assume high trauma burden
          </li>
          <li>
            <span className="text-red-500 font-semibold">
              Unconscious or not alert
            </span>{" "}
            → immediate ALS-level concern
          </li>
          <li>
            <span className="text-red-500 font-semibold">Serious bleeding</span>{" "}
            → treat as time-sensitive hemorrhage
          </li>
        </ul>

        <p className="mt-2">
          Document the <span className="font-medium">time of incident</span> and
          <span className="font-medium"> whether the wound is recent</span>.
          Bites older than 6 hours without complications may be less urgent but
          still need evaluation for
          <span className="text-yellow-400 font-semibold">
            {" "}
            rabies exposure
          </span>{" "}
          or infection.
        </p>
      </>
    ),
    services: [
      { name: "EMS", priority: true },
      { name: "Fire", priority: 2 },
      { name: "Police", priority: 3 },
    ],
    defaultPriority: "A",
    defaultPlan: 9,
    defaultCode: "03A03",
    preSend: true,
    questions: [
      {
        text: (
          <p>
            <span className="text-blue-400">(If not obvious)</span> Is the{" "}
            <b className="font-bold">
              attack <span className="text-red-400">currently happening</span>
            </b>
            ?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Attack not in prog",
            questionDisplay: "**pronoun** is not currently being attacked",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Attack in prog",
            questionDisplay: "**pronoun** is currently being attacked",
            updateCode: "03D09",
            send: true,
            continue: true,
            setSceneSecure: false,
          },
          {
            answer: "Unknown",
            display: "Unk if attack in prog",
            questionDisplay: "Unk if **pronoun** is currently being attacked",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: (
          <p>
            <b className="font-bold">When</b> did the{" "}
            <b className="font-bold">attack/incident</b> occur?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient, answers) => {
          const firstAnswer = answers[0]?.answer;
          return firstAnswer !== "Yes";
        },
        preRenderLogic: "Attack not in progress",
        preRenderDependencies: ["answers"],
        answers: [
          {
            answer: "Less than 6 hours ago",
            display: "Happened now (< 6 hours ago)",
            questionDisplay: "**pronoun** was attacked now (< 6 hours ago)",
            continue: true,
          },
          {
            answer: "More than 6 hours ago",
            display: "Happened earlier (> 6 hours ago)",
            questionDisplay: "**pronoun** was attacked earlier (> 6 hours ago)",
            continue: true,
            updateCode: "03A02",
          },
          {
            answer: "Unknown",
            display: "Unk when attack happened",
            questionDisplay: "Unk when **pronoun** was attacked",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: (
          <p>
            <b className="font-bold">Were</b> there{" "}
            <b className="font-bold">multiple animals</b> involved?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "No",
            display: "Single animal involved",
            questionDisplay: "**pronoun** was attacked by a single animal",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Multiple animals involved",
            questionDisplay: "**pronoun** was attacked by multiple animals",
            updateCode: "03D08",
            continue: true,
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if multiple animals involved",
            questionDisplay:
              "Unk if **pronoun** was attacked by multiple animals",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What <b className="font-bold">type</b> of{" "}
            <b className="font-bold">animal</b> was involved?
          </p>
        ),
        questionType: "select",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              ANIMAL TYPE CLARIFICATION
            </h4>
            <p>
              While most animal-related calls involve <b>dogs</b> or{" "}
              <b>insects</b>, some may involve more dangerous or unusual
              species. Correct classification ensures appropriate response
              priority.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm text-muted-foreground">
              <div>
                <h5 className="font-semibold text-base text-red-500 mb-2">
                  LARGE Animals
                </h5>
                <p>
                  A <b>LARGE animal</b> is a non-domesticated or farm-type
                  animal significantly capable of causing traumatic injury due
                  to its size, strength, or behavior.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Bear</li>
                  <li>Moose</li>
                  <li>Bison</li>
                  <li>Cow/Bull</li>
                  <li>Horse</li>
                  <li>Wild Boar</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-base text-yellow-500 mb-2">
                  EXOTIC Animals
                </h5>
                <p>
                  An <b>EXOTIC animal</b> is a non-native or wild species,
                  typically not found in domestic settings, and often poses a
                  severe bite, claw, or venom risk.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Lion</li>
                  <li>Tiger</li>
                  <li>Mountain Lion</li>
                  <li>Leopard</li>
                  <li>Wolf</li>
                  <li>Venomous Reptiles</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="font-semibold text-base text-purple-500 mb-2">
                MAULING
              </h5>
              <p>
                A <b>MAULING</b> refers to a <b>prolonged or severe attack</b>{" "}
                in which the victim has been violently bitten, clawed, or
                trampled—often repeatedly—by one or more animals. This typically
                results in multiple injuries, uncontrolled bleeding, or
                disfigurement.
              </p>
              <p className="mt-1">
                MAULINGS are <b>high-acuity</b> situations and should be treated
                with urgency. This applies regardless of the animal species
                involved.
              </p>
            </div>

            <p className="mt-4 text-red-400">
              Do <b>not guess</b> the animal type if the caller is unsure.
              Select “Unknown” if the exact type cannot be confirmed.
            </p>
          </div>
        ),
        defaultTab: "ai",
        answers: [
          {
            answer: "Dog",
            display: "Dog involved",
            questionDisplay: "**pronoun** was attacked by a dog",
            continue: true,
          },
          {
            answer: "Insect:",
            display: "Attack by insect: {input}",
            questionDisplay: "**pronoun** was attacked by an insect: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "LARGE Animal:",
            display: "Attack by large animal: {input}",
            questionDisplay:
              "**pronoun** was attacked by a large animal: {input}",
            updateCode: "03D06",
            input: true,
            continue: true,
            send: true,
          },
          {
            answer: "EXOTIC Animal:",
            display: "Attack by exotic animal: {input}",
            questionDisplay:
              "**pronoun** was attacked by an exotic animal: {input}",
            updateCode: "03D07",
            input: true,
            continue: true,
            send: true,
          },
          {
            answer: "MAULING",
            display: "MAULING attack",
            questionDisplay: "**pronoun** was involved in a MAULING attack",
            updateCode: "03D08",
            continue: true,
            send: true,
          },
          {
            answer: "Other:",
            display: "Attack by other animal: {input}",
            questionDisplay:
              "**pronoun** was attacked by another animal: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk type of animal",
            questionDisplay: "Unk what type of animal attacked **pronoun**",
            continue: true,
            updateCode: "03B03",
          },
        ],
      },

      {
        text: (
          <p>
            <b className="font-bold">Where</b> is the{" "}
            <b className="font-bold">animal now</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "Location:",
            display: "Animal is {input}",
            questionDisplay: "The animal is {input}",
            input: true,
            continue: true,
          },
          {
            answer: "Gone",
            display: "Animal is gone",
            questionDisplay: "The animal is no longer present",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk where animal is",
            questionDisplay: "Unk where the animal is now",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is **pronoun** <b>completely alert</b>{" "}
            <span className="text-red-400">(responding appropriately)</span>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient) => {
          const { patientConsciousness } = patient;
          return patientConsciousness !== "no";
        },
        preRenderLogic: "Patient is conscious",
        preRenderDependencies: ["patient"],
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
            updateCode: "03D03",
            continue: true,
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if responding nlly",
            questionDisplay:
              "Unk if **pronoun** is completely alert (responding appropriately)",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Is there any{" "}
            <b className="font-bold text-red-400">SERIOUS bleeding</b>?
          </p>
        ),
        questionType: "select",
        additionalInstructions: (
          <div>
            <h4 className="text-lg font-bold text-green-400">
              SERIOUS hemorrhage
            </h4>
            <p className="pl-4">
              <b className="font-bold">Uncontrolled bleeding</b>{" "}
              <span className="text-red-500">(spurting/won't stop)</span> from{" "}
              <b className="font-bold">any area</b>, or anytime a caller reports{" "}
              <b className="font-bold">"serious" bleeding</b>.
            </p>
          </div>
        ),
        defaultTab: "ai",
        answers: [
          {
            answer: "No serious bleeding",
            display: "No SERIOUS bleeding",
            questionDisplay: "**pronoun** has no SERIOUS bleeding",
            continue: true,
          },
          {
            answer: "Yes",
            display: "SERIOUS bleeding",
            questionDisplay: "**pronoun** has SERIOUS bleeding",
            updateCode: "03B02",
            continue: true,
          },
          {
            answer: "Not bleeding now",
            display: "Not bleeding now",
            questionDisplay: "**pronoun** is not bleeding now",
            continue: true,
          },
          {
            answer: "No bleeding at all",
            display: "No bleeding",
            questionDisplay: "**pronoun** has no bleeding at all",
            continue: true,
          },
          {
            answer: "Unknown",
            display: "Unk if SERIOUS bleeding",
            questionDisplay: "Unk if **pronoun** has any SERIOUS bleeding",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What <b className="font-bold">part</b> of the body is{" "}
            <b className="font-bold">injured</b>?
          </p>
        ),
        questionType: "select",
        answers: [
          {
            answer: "NOT DANGEROUS body area",
            display: "NOT DANGEROUS body area",
            questionDisplay: "**pronoun** has injs to a NOT DANGEROUS body area",
            continue: true,
          },
          {
            answer: "POSSIBLY DANGEROUS body area",
            display: "POSSIBLY DANGEROUS body area",
            questionDisplay: "**pronoun** has injs to a POSSIBLY DANGEROUS body area",
            continue: true,
          },
          {
            answer: "Chest",
            display: "Inj(s) to chest",
            questionDisplay: "**pronoun** has injuries to the chest",
            continue: true,
          },
          {
            answer: "Neck",
            display: "Inj(s) to neck",
            questionDisplay: "**pronoun** has injuries to the neck",
            continue: true,
          },
          {
            answer: "Head",
            display: "Inj(s) to head",
            questionDisplay: "**pronoun** has injuries to the head",
            continue: true,
          },
          {
            answer: "DANGEROUS body area",
            display: "DANGEROUS body area",
            questionDisplay: "**pronoun** has injs to aDANGEROUS body area",
          },
          {
            answer: "Other area:",
            display: "Inj(s) to other area: {input}",
            questionDisplay:
              "**pronoun** has injuries to another area: {input}",
            input: true,
            continue: true,
          },
          {
            answer: "No injuries",
            display: "Superficial injs rptd",
            questionDisplay: "**pronoun** has no injuries reported",
            continue: true,
            updateCode: "03A03",
          },
          {
            answer: "Unknown",
            display: "Unk body area injured",
            questionDisplay: "Unk what body area **pronoun** has injuries to",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Does **pronoun** have any{" "}
            <b className="font-bold">difficulty breathing</b>?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient, answers) => {
          const { patientBreathing, patientProximity } = patient;
          const lastAnswer = answers[answers.length - 1]?.answer;
          return (
            patientBreathing !== "no" &&
            patientProximity !== "first" &&
            (lastAnswer === "Chest" ||
              lastAnswer === "Neck" ||
              lastAnswer === "Head")
          );
        },
        preRenderLogic:
          "Patient is breathing and not the caller and has injuries to chest, neck, or head",
        preRenderDependencies: ["patient", "answers"],
        answers: [
          {
            answer: "No",
            display: "No diff breathing",
            questionDisplay: "**pronoun** does not have difficulty breathing",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff breathing",
            questionDisplay: "**pronoun** has difficulty breathing",
            updateCode: "03D04",
            continue: true,
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing",
            questionDisplay: "Unk if **pronoun** has difficulty breathing",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            Are you having any <b className="font-bold">difficulty breathing</b>
            ?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (patient, answers) => {
          const { patientBreathing, patientProximity } = patient;
          const lastAnswer = answers[answers.length - 1]?.answer;
          return (
            patientBreathing !== "no" &&
            patientProximity === "first" &&
            (lastAnswer === "Chest" ||
              lastAnswer === "Neck" ||
              lastAnswer === "Head")
          );
        },
        preRenderLogic:
          "Patient is breathing and is the caller and has injuries to chest, neck, or head",
        preRenderDependencies: ["patient", "answers"],
        answers: [
          {
            answer: "No",
            display: "No diff breathing",
            questionDisplay: "**pronoun** does not have difficulty breathing",
            continue: true,
          },
          {
            answer: "Yes",
            display: "Diff breathing",
            questionDisplay: "**pronoun** has difficulty breathing",
            updateCode: "03D04",
            continue: true,
            send: true,
          },
          {
            answer: "Unknown",
            display: "Unk if diff breathing",
            questionDisplay: "Unk if **pronoun** has difficulty breathing",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b className="font-bold">NOT DANGEROUS</b> body area?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient, answers) => {
          const lastAnswer = answers[answers.length - 1]?.answer;
          return lastAnswer === "NOT DANGEROUS body area";
        },
        preRenderDependencies: ["answers"],
        preRenderLogic: "NOT DANGEROUS body area was selected",
        answers: [
          {
            answer: "Ankle",
            display: "NOT DANG: Ankle",
            questionDisplay: "**pronoun** has injuries to the ankle",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Arm, upper*",
            display: "NOT DANG: Arm, upper",
            questionDisplay: "**pronoun** has injuries to the upper arm",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Collar bone (clavicle)",
            display: "NOT DANG: Collar bone (clavicle)",
            questionDisplay: "**pronoun** has injuries to the collar bone",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Elbow*",
            display: "NOT DANG: Elbow",
            questionDisplay: "**pronoun** has injuries to the elbow",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Finger",
            display: "NOT DANG: Finger",
            questionDisplay: "**pronoun** has injuries to the finger",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Foot",
            display: "NOT DANG: Foot",
            questionDisplay: "**pronoun** has injuries to the foot",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Forearm",
            display: "NOT DANG: Forearm",
            questionDisplay: "**pronoun** has injuries to the forearm",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Genitalia",
            display: "NOT DANG: Genitalia",
            questionDisplay: "**pronoun** has injuries to the genitalia",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Groin",
            display: "NOT DANG: Groin",
            questionDisplay: "**pronoun** has injuries to the groin",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Hand",
            display: "NOT DANG: Hand",
            questionDisplay: "**pronoun** has injuries to the hand",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Hip/Pelvis",
            display: "NOT DANG: Hip/Pelvis",
            questionDisplay: "**pronoun** has injuries to the hip or pelvis",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Knee*",
            display: "NOT DANG: Knee",
            questionDisplay: "**pronoun** has injuries to the knee",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Leg, lower",
            display: "NOT DANG: Leg, lower",
            questionDisplay: "**pronoun** has injuries to the lower leg",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Leg, upper (without deformity)",
            display: "NOT DANG: Leg, upper",
            questionDisplay: "**pronoun** has injuries to the upper leg",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Shoulder",
            display: "NOT DANG: Shoulder",
            questionDisplay: "**pronoun** has injuries to the shoulder",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Tailbone (coccyx)",
            display: "NOT DANG: Tailbone",
            questionDisplay: "**pronoun** has injuries to the tailbone",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Toe",
            display: "NOT DANG: Toe",
            questionDisplay: "**pronoun** has injuries to the toe",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "Wrist",
            display: "NOT DANG: Wrist",
            questionDisplay: "**pronoun** has injuries to the wrist",
            updateCode: "03A01",
            continue: true,
          },
          {
            answer: "None of these",
            display: "No NOT DANG body area ID'd",
            questionDisplay: "**pronoun** has no NOT DANG body area identified",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b className="font-bold">POSSIBLY DANGEROUS</b> body
            area?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient, answers) => {
          const lastAnswer = answers[answers.length - 1]?.answer;
          return (
            lastAnswer === "POSSIBLY DANGEROUS body area" ||
            lastAnswer === "None of these" ||
            lastAnswer === "No"
          );
        },
        preRenderDependencies: ["answers"],
        preRenderLogic: "POSSIBLY DANGEROUS body area was selected",
        answers: [
          {
            answer: "Abdomen",
            display: "POSSIBLY DANG: Abdomen",
            questionDisplay: "**pronoun** has injuries to the abdomen",
            updateCode: "03B01",
            continue: true,
          },
          {
            answer: "Amputation (excluding fingers/toes)",
            display: "POSSIBLY DANG: Amputation",
            questionDisplay:
              "**pronoun** has an amputation (excluding fingers/toes)",
            updateCode: "03B01",
          },
          {
            answer: "Back",
            display: "POSSIBLY DANG: Back",
            questionDisplay: "**pronoun** has injuries to the back",
            updateCode: "03B01",
            continue: true,
          },
          {
            answer: "Chest (breathing nlly)",
            display: "POSSIBLY DANG: Chest",
            questionDisplay:
              "**pronoun** has injuries to the chest (breathing normally)",
            updateCode: "03B01",
          },
          {
            answer: "Head (alert)",
            display: "POSSIBLY DANG: Head",
            questionDisplay: "**pronoun** has injuries to the head (alert)",
            updateCode: "03B01",
            continue: true,
          },
          {
            answer: "Leg, upper (obvious deformity)",
            display: "POSSIBLY DANG: Leg, upper*",
            questionDisplay:
              "**pronoun** has injuries to the leg (upper, obvious deformity)",
            updateCode: "03B01",
            continue: true,
          },
          {
            answer: "Neck (breathing nlly)",
            display: "POSSIBLY DANG: Neck",
            questionDisplay:
              "**pronoun** has injuries to the neck (breathing normally)",
            updateCode: "03B01",
            continue: true,
          },
          {
            answer: "None of these",
            display: "No POSSIBLY DANG body area ID'd",
            questionDisplay:
              "**pronoun** has no POSSIBLY DANG body area identified",
            continue: true,
          },
        ],
      },

      {
        text: (
          <p>
            What is the <b className="font-bold">DANGEROUS</b> body area?
          </p>
        ),
        questionType: "select",
        preRenderInstructions: (_patient, answers) => {
          const lastAnswer = answers[answers.length - 1]?.answer;
          return (
            lastAnswer === "DANGEROUS body area" ||
            lastAnswer === "None of these" ||
            lastAnswer === "No"
          );
        },
        preRenderDependencies: ["answers"],
        preRenderLogic: "DANGEROUS body area was selected",
        answers: [
          {
            answer: "Body area:",
            display: "DANGEROUS: {input}",
            questionDisplay:
              "**pronoun** has injuries to a DANGEROUS body area: {input}",
            updateCode: "03D05",
            input: true,
            continue: true,
          },
        ],
      },
    ],
    determinants: [
      {
        priority: "A",
        codes: [
          {
            code: "03A01",
            text: "Not Dangerous Body Area",
            recResponse: 9,
          },
          {
            code: "03A02",
            text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
            recResponse: 10,
          },
          {
            code: "03A03",
            text: "Superficial Injs",
            recResponse: 10,
          },
        ],
      },
      {
        priority: "B",
        codes: [
          {
            code: "03B00",
            text: "BLS Override (Bravo)",
            recResponse: 9,
          },
          {
            code: "03B01",
            text: "Possibly Dangerous Body Area",
            recResponse: 9,
          },
          {
            code: "03B02",
            text: "Serious Hemorrhage",
            recResponse: 9,
          },
          {
            code: "03B03",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 9,
          },
        ],
      },
      {
        priority: "D",
        codes: [
          {
            code: "03D00",
            text: "ALS Override (Delta)",
            recResponse: 11,
          },
          {
            code: "03D01",
            text: "Arrest",
            recResponse: 12,
            notBreathing: true,
          },
          {
            code: "03D02",
            text: "Unconscious",
            recResponse: 13,
            notConscious: true,
          },
          {
            code: "03D03",
            text: "Not Alert",
            recResponse: 11,
          },
          {
            code: "03D04",
            text: "Chest/Neck/Head Injs (w/ Diff Breathing)",
            recResponse: 11,
          },
          {
            code: "03D05",
            text: "Dangerous Body Area",
            recResponse: 11,
          },
          {
            code: "03D06",
            text: "Large Animal",
            recResponse: 11,
          },
          {
            code: "03D07",
            text: "Exotic Animal",
            recResponse: 11,
          },
          {
            code: "03D08",
            text: "Mauling or Mult Animals",
            recResponse: 11,
          },
          {
            code: "03D09",
            text: "Attack In Progress",
            recResponse: 11,
          },
        ],
      },
    ],
  },
];
