export function ChangingColor() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">CHANGING COLOR</h4>
      <p className="mb-2">
        Changing colors of <b>clinical significance</b> incide:
      </p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-4">
        <li>Ashen/Gray</li>
        <li>Blue/Cyanotic/Purple</li>
        <li>Mottled</li>
      </ul>
      <p className="text-red-400">
        (Pale, pink, and red are not colors of clinical significance in the
        dispatch environment and will not, alone, change the dispatch priority.
        These answer choices in ProQA enable further study. Callers failing to
        initially identify a listed color should not be coached by asking
        unlisted clarifiers such as "Well, is she gray?")
      </p>
    </div>
  );
}

export function AbdoPainDescription() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">
        PAIN QUALITY
      </h4>
      <p>
        The way the patient describes their pain can reveal life-threatening
        conditions.
      </p>
      <p className="mt-3">
        If the pain is described as <b>ripping or tearing</b>, especially in the
        back, chest, or abdomen, and the patient is <b>50 or older</b>, this may
        indicate a possible aortic dissection—a rare but deadly vascular
        emergency.
      </p>
      <p>
        This pain quality significantly increases concern for cardiac or
        vascular involvement and should be prioritized for emergency response.
      </p>

      <p className="mt-2 text-red-400">
        If "ripping/tearing" pain is mentioned by a patient aged 50 or older, it
        will trigger a higher-level response code.
      </p>
    </div>
  );
}

export function AbdoPainLocation() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">PAIN LOCATION</h4>
      <p>
        The <b>navel</b> (belly button) is the small, central point on the
        abdomen where the umbilical cord was attached. It’s a useful reference
        to help identify the pain location.
      </p>
      <p className="mt-3">
        Pain <b>above the navel</b> is more likely to involve the heart, aorta,
        or other major organs. This can signal a serious medical
        emergency—especially in patients at increased cardiac risk.
      </p>
      <p>
        Pain <b>below the navel</b> is more often linked to gastrointestinal,
        urinary, or reproductive causes and is generally lower in immediate
        clinical risk.
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
        Do <b>not coach or lead</b> the caller by asking, “Well, is it above or
        below the belly button?” If they don’t know or can’t describe it, choose
        “Unknown.”
      </p>
    </div>
  );
}

export function DiffSpeakingBtwnBreaths() {
  return (
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
          Only able to <b className="font-bold">speak a few words</b> without
          taking a breath
        </li>
        <li>
          Breathing attempts that <b className="fond-bold">severely hinder</b>{" "}
          crying in infants and small children
        </li>
      </ul>
    </div>
  );
}

export function AllergyCauses() {
  return (
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
          <b className="text-red-500">Swarming Attack</b>: This refers to an
          attack by multiple stinging insects at once—commonly bees, wasps, or
          hornets. Repeated stings can rapidly cause <b>anaphylaxis</b>,
          swelling of the airway, or circulatory collapse. This is treated as a{" "}
          <b>life-threatening emergency</b>.
        </li>
        <li>
          <b className="text-red-500">Snakebite</b>: Even a single bite from a
          venomous snake can inject life-threatening venom, potentially causing{" "}
          <b>allergic reactions, bleeding, paralysis, or shock</b>. Snakebites
          always require immediate, high-priority dispatch.
        </li>
        <li>
          <b>Spider bites</b>: Some species can cause medically significant
          symptoms such as swelling, nausea, or localized tissue damage.
          Reactions vary based on species.
        </li>
        <li>
          <b>Food-related reactions</b>: Common triggers include peanuts,
          shellfish, dairy, and eggs. These are the leading causes of
          anaphylaxis and airway compromise.
        </li>
      </ul>

      <p className="mt-2">
        If the caller knows the specific trigger (e.g., “peanut,” “bee sting,”
        “shrimp”), be sure to <b>record that detail</b> using the input field
        provided.
      </p>

      <p className="mt-2 text-red-400">
        Do <b>not coach</b> the caller into selecting a specific cause. Avoid
        leading questions like “Was it a spider or a snake?” — always let the
        caller provide the information naturally.
      </p>
    </div>
  );
}

export function MedsInjecAlergies() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">
        MEDICATIONS & INJECTIONS FOR ALLERGIC REACTIONS
      </h4>
      <p>
        This question helps determine if the patient is known to have{" "}
        <b>severe allergies</b>
        and is <b>prepared with medication or an epinephrine injection</b>{" "}
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
          <b>Medications:</b> Antihistamines (e.g., Benadryl), oral steroids,
          etc.
        </li>
      </ul>

      <p className="mt-2 text-red-400">
        Do <b>not assume</b> the caller knows the specific name of the
        medication or device. Accept general responses like “yes, she has an
        EpiPen” or “he takes allergy pills.”
      </p>
    </div>
  );
}

export function AnimalTypes() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">
        ANIMAL TYPES
      </h4>
      <p>
        While most animal-related calls involve <b>dogs</b> or <b>insects</b>,
        some may involve more dangerous or unusual species. Correct
        classification ensures appropriate response priority.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm text-muted-foreground">
        <div>
          <h5 className="font-semibold text-base text-red-500 mb-2">
            LARGE Animals
          </h5>
          <p>
            A <b>LARGE animal</b> is a non-domesticated or farm-type animal
            significantly capable of causing traumatic injury due to its size,
            strength, or behavior.
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
            An <b>EXOTIC animal</b> is a non-native or wild species, typically
            not found in domestic settings, and often poses a severe bite, claw,
            or venom risk.
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
          A <b>MAULING</b> refers to a <b>prolonged or severe attack</b> in
          which the victim has been violently bitten, clawed, or trampled—often
          repeatedly—by one or more animals. This typically results in multiple
          injuries, uncontrolled bleeding, or disfigurement.
        </p>
        <p className="mt-1">
          MAULINGS are <b>high-acuity</b> situations and should be treated with
          urgency. This applies regardless of the animal species involved.
        </p>
      </div>

      <p className="mt-4 text-red-400">
        Do <b>not guess</b> the animal type if the caller is unsure. Select
        “Unknown” if the exact type cannot be confirmed.
      </p>
    </div>
  );
}

export function SeriousBleeding() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">SERIOUS hemorrhage</h4>
      <p className="pl-4">
        <b className="font-bold">Uncontrolled bleeding</b>{" "}
        <span className="text-red-500">(spurting/won't stop)</span> from{" "}
        <b className="font-bold">any area</b>, or anytime a caller reports{" "}
        <b className="font-bold">"serious" bleeding</b>.
      </p>
    </div>
  );
}

export function BodyAreas() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">
        BODY AREA CLASSIFICATION
      </h4>
      <p>
        Injuries to certain parts of the body are more likely to involve
        life-threatening complications (e.g., internal bleeding, airway
        compromise, spinal injury). Proper classification ensures the correct
        response level is assigned.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-sm text-muted-foreground">
        <div>
          <h5 className="font-semibold text-base text-red-500 mb-2">
            POSSIBLY DANGEROUS Body Area
          </h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Abdomen</li>
            <li>Back</li>
            <li>Chest (breathing normally)</li>
            <li>Head (when alert)</li>
            <li>Neck (breathing normally)</li>
            <li>Amputation (excluding fingers/toes)</li>
            <li>
              Upper leg <i>(with obvious deformity)</i>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-base text-green-500 mb-2">
            NOT DANGEROUS Body Area
          </h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fingers / Toes</li>
            <li>Hand / Wrist</li>
            <li>Elbow / Forearm</li>
            <li>Upper arm / Shoulder</li>
            <li>Lower leg / Knee</li>
            <li>Ankle / Foot</li>
            <li>Hip / Pelvis</li>
            <li>Tailbone (coccyx)</li>
            <li>Groin / Genitalia</li>
            <li>Collarbone (clavicle)</li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-red-400">
        If the injured area doesn't clearly fall into one of these categories,
        use the best available match, or select "Other" and describe it.
        Prioritize airway, spinal, or internal involvement as POSSIBLY
        DANGEROUS.
      </p>
    </div>
  );
}

export function RuleOfNines() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400 mb-2">
        RULE OF NINES – BODY SURFACE AREA ESTIMATION
      </h4>
      <p>
        The Rule of Nines is a tool used to estimate the total body surface area
        (TBSA) burned. Each region of the body is assigned a percentage value.
        This is especially useful for assessing severity and guiding treatment
        decisions for burn injuries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-muted-foreground">
        <div>
          <h5 className="font-semibold text-base mb-2">BODY REGION</h5>
          <ul className="list-disc pl-4 space-y-1">
            <li>Face / Scalp</li>
            <li>Back of Head</li>
            <li>Anterior (front) Chest</li>
            <li>Posterior (back) Thorax</li>
            <li>Abdomen</li>
            <li>Buttocks</li>
            <li>Genitalia</li>
            <li>Anterior RLE</li>
            <li>Posterior RLE</li>
            <li>Anterior LLE</li>
            <li>Posterior LLE</li>
            <li>Anterior RUE</li>
            <li>Posterior RUE</li>
            <li>Anterior LUE</li>
            <li>Posterior LUE</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-base mb-2">% VALUE</h5>
          <ul className="space-y-1">
            <li>4.5%</li>
            <li>4.5%</li>
            <li>9%</li>
            <li>9%</li>
            <li>9%</li>
            <li>9%</li>
            <li>1%</li>
            <li>9%</li>
            <li>9%</li>
            <li>9%</li>
            <li>9%</li>
            <li>4.5%</li>
            <li>4.5%</li>
            <li>4.5%</li>
            <li>4.5%</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-base mb-2">SIDE / LOCATION</h5>
          <ul className="list-none pl-0 space-y-1">
            <li>Front of Head</li>
            <li>Back of Head</li>
            <li>Front Upper Torso</li>
            <li>Back Upper Torso</li>
            <li>Front Lower Torso</li>
            <li>Rear Lower Torso</li>
            <li>Genital Area</li>
            <li>Right Leg – Front</li>
            <li>Right Leg – Back</li>
            <li>Left Leg – Front</li>
            <li>Left Leg – Back</li>
            <li>Right Arm – Front</li>
            <li>Right Arm – Back</li>
            <li>Left Arm – Front</li>
            <li>Left Arm – Back</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground space-y-2">
        <h5 className="text-base font-semibold text-blue-500">DEFINITIONS</h5>
        <p>
          <b>Anterior:</b> Refers to the front side of the body (e.g., chest,
          abdomen, front of limbs).
        </p>
        <p>
          <b>Posterior:</b> Refers to the back side of the body (e.g., back,
          back of limbs).
        </p>
        <p>
          <b>RUE:</b> Right Upper Extremity (i.e., right arm).
        </p>
        <p>
          <b>LUE:</b> Left Upper Extremity (i.e., left arm).
        </p>
        <p>
          <b>RLE:</b> Right Lower Extremity (i.e., right leg).
        </p>
        <p>
          <b>LLE:</b> Left Lower Extremity (i.e., left leg).
        </p>
      </div>

      <p className="mt-4 text-red-400">
        When multiple areas are burned, add the percentages to determine the
        total estimated body surface area affected.
      </p>
    </div>
  );
}

export function ObviousDeath() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">OBVIOUS DEATH</h4>
      <p className="mb-2">
        <b className="font-bold">
          Local Medical Control must define* and authorize
        </b>{" "}
        any of the patient conditions below before this determinant can be used.
        Situations should be unquestionable and may include:
      </p>
      <ul className="pl-5 text-sm text-muted-foreground space-y-1 mb-4">
        <li className="space-x-2 flex items-end">
          <b className="font-bold">a.</b>
          <p>Cold and stiff in a warm environment</p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">b.</b>
          <p>Decapitation</p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">c.</b>
          <p>Decomposition</p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">d.</b>
          <p>Incineration</p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">e.</b>
          <p>
            <b className="text-md font-bold text-green-400">NON-RECENT</b> death
          </p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">f.</b>
          <p>Severe injuries obviously incompatible with life</p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">g.</b>
          <p>
            Submersion <span className="text-red-400">(&gt; 6hrs)</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export function ExpectedDeath() {
  return (
    <div>
      <h4 className="text-lg font-bold text-green-400">EXPECTED DEATH</h4>
      <p className="mb-2">
        <b className="font-bold">
          Local Medical Control must define* and authorize
        </b>{" "}
        any of the patient conditions below before this determinant can be used.
        Situations should be unquestionable and may include:
      </p>
      <ul className="pl-5 text-sm text-muted-foreground space-y-1 mb-4">
        <li className="space-x-2 flex items-end">
          <b className="font-bold">x.</b>
          <p>Terminal illness</p>
        </li>
        <li className="space-x-2 flex items-end">
          <b className="font-bold">y.</b>
          <p className="font-bold text-md">DNR (Do Not Resuscitate) Order</p>
        </li>
      </ul>
    </div>
  );
}
