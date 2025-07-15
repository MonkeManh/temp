# FiveQA

**FiveQA** brings the structure and intelligence of the Paramount ProQA suite into the FiveM platform, offering realistic and guided emergency call handling for Fire, EMS, and Police services.

> Powered by:
> - **Paramount Fire ProQA**
> - **Paramount Medical Protocols**
> - **PPDS (Police Priority Dispatch System)**

---

## 📚 Glossary

- [Overview](#-overview)
- [How Calls Work](#-how-calls-work)
- [EMS Protocols](#-ems-protocols)
- [Fire Protocols](#-fire-protocols)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧭 Overview

FiveQA replicates the real-world dispatch process by guiding dispatchers through structured, service-specific protocols. It ensures priority-appropriate, accurate, and fast emergency response—all adapted for the immersive roleplay environment of **FiveM**.

---

## 📞 How Calls Work

### 1. **Create a Call**
Dispatchers begin by initiating a new call in the system, opening a blank case record.

### 2. **Enter Case Information**
Basic data such as:
- Location & cross streets 
- Caller Information 
- Caller statement  

This information is collected before selecting a service type.

### 3. **Select a Service**
Dispatchers choose one of the following:
- **Police**
- **Fire**
- **EMS**

Each service has its own protocol logic and question paths.

### 4. **Follow Service-Specific Questions**
Depending on the selected service, FiveQA dynamically presents:
- Guided questions tailored to the case type
- Conditional logic (some questions only appear if needed)
- Entry validation to ensure complete and accurate data

### 5. **Reach a Determinant Code**
As questions are answered, FiveQA:
- Prioritizes responses (Omega to Echo level)
- Suggests an appropriate response plan
- Locks in a final determinant code that guides dispatch decisions

---

## 🚑 EMS Protocols

FiveQA includes 36 EMS protocols, adapted from the real-world Medical Priority Dispatch System. Dispatchers select the most relevant protocol based on the caller's chief complaint.

| #  | Protocol |
|----|----------|
| 01 | Abdominal Pain/Problems |
| 02 | Allergies (Reactions) / Envenomations (Stings, Bites) |
| 03 | Animal Bites/Attacks |
| 04 | Assault/Sexual Assault |
| 05 | Back Pain (Non-Traumatic or Non-Recent Trauma) |
| 06 | Breathing Problems |
| 07 | Burns (Scalds) / Explosion (Blast) |
| 08 | Carbon Monoxide/Inhalation/Hazmat/CBRN |
| 09 | Cardiac or Respiratory Arrest / Death |
| 10 | Chest Pain (Non-Traumatic) |
| 11 | Choking |
| 12 | Convulsions / Seizures |
| 13 | Diabetic Problems |
| 14 | Drowning (Near) / Diving / SCUBA Accident |
| 15 | Electrocution / Lightning |
| 16 | Eye Problems / Injuries |
| 17 | Falls |
| 18 | Headache |
| 19 | Heart Problems / A.I.C.D. |
| 20 | Heat / Cold Exposure |
| 21 | Hemorrhage / Laceration |
| 22 | Inaccessible Incident / Other Entrapments (Non-Traffic) |
| 23 | Overdose / Poisoning (Ingestion) |
| 24 | Pregnancy / Childbirth / Miscarriage |
| 25 | Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior |
| 26 | Sick Person (Specific Diagnosis) |
| 27 | Stab / Gunshot / Penetrating Trauma |
| 28 | Stroke (CVA) / Transient Ischemic Attack (TIA) |
| 29 | Traffic / Transportation Incidents |
| 30 | Traumatic Injuries (Specific) |
| 31 | Unconsciousness / Fainting (Near) |
| 32 | Unknown Problem (Person Down) |
| 33 | Transfer / Interfacility / Palliative Care |
| 34 | Automatic Crash Notification (ACN) |
| 35 | Health Care Professional Admission |
| 36 | Pandemic Flu |

---

## 🔥 Fire Protocols

FiveQA includes the following fire response protocols, designed to guide dispatchers through critical fire service incidents with structured logic and response recommendations.

| #  | Protocol |
|----|----------|
| 51 | Aircraft Emergency |
| 52 | Alarms |
| 53 | Service Call |
| 54 | Confined Space/Structure Collapse |
| 55 | Electrical Hazard |
| 56 | Elevator/Escalator Incident |
| 57 | Explosion |
| 58 | Extrication/Entrapment |
| 59 | Fuel Spill/Fuel Odor |
| 60 | Gas Leak/Gas Odor (Natural & LP Gases) |
| 61 | Hazmat |
| 62 | High Angle Rescue |
| 63 | Lightning Strike (Investigation) |
| 64 | Marine/Boat Fire |
| 65 | Mutual Aid/Assist Outside Agency |
| 66 | Odor (Strange/Unknown) |
| 67 | Outside/Other Fires |
| 68 | Smoke Investigation (Outside) |
| 69 | Structure Fire |
| 70 | Train & Rail Collision/Derailment |
| 71 | Vehicle Fire |
| 72 | Water/Ice/Mud Rescue |
| 73 | Watercraft in Distress/Collision |
| 74 | Suspicious Package (Letter, Item, Substance) / Explosives |
| 75 | Train & Rail Fire |
| 76 | Bomb Threat |
| 77 | Motor Vehicle Collision |
| 78 | Backcountry Rescue |
| 79 | Lost Person |
| 80 | Outside Tank Fire |
| 81 | Sinking Vehicle/Vehicle in Floodwater |
| 82 | Vegetation/Wildland/Brush/Grass Fire |

---

## 🤝 Contributing

FiveQA is a solo-developed project built with care and attention to detail to bring realistic emergency dispatching to the FiveM platform.

Because this is a one-person effort, **community contributions are incredibly valuable**. Whether you're submitting:
- Protocol improvements or suggestions
- Bug reports or performance optimizations
- UI/UX feedback
- Feature ideas

If you have experience with emergency dispatching, ProQA systems, or FiveM integration—your insight is especially encouraged.

**To contribute:**
1. Open an issue to start a discussion.
2. Fork the repository.
3. Submit a pull request with clear, focused changes.
4. For protocol additions or edits, include references or reasoning where applicable.

---

## 📄 License

FiveQA is provided under the [MIT License](LICENSE), but with important context:

> **This project is a fan-made recreation and adaptation** of three separate systems:
> - Paramount Fire ProQA  
> - Paramount Medical Protocols  
> - Police Priority Dispatch System (PPDS)

It is developed for **educational, training, and non-commercial purposes only**, specifically within the FiveM roleplay community.

- FiveQA is **not affiliated with**, **endorsed by**, or **sponsored by** Priority Dispatch Corp, Paramount, or any official emergency dispatch body.
- All content has been **reimagined or adapted** to suit gameplay and is based off of publicly available information.
- The purpose of this project is to **simulate structured dispatch logic**, **not to replace** any official systems in real-world operations.

If you are the owner of any referenced material and believe content should be modified or removed, please open an issue or contact the maintainer directly.

**Commercial use of this project is strictly prohibited.**
