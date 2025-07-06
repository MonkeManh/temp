import { ArrowRight } from "lucide-react";

export const dlsLinks = [
  {
    class: "X",
    links: [
      {
        name: "21",
        title: "Second Party Caller",
        content: (
          <div className="space-y-6">
            <p>
              (<b className="font-bold">Reassure</b> the caller that{" "}
              <b className="font-bold">help</b> is on the way.)
            </p>
            <p>
              <b>Don't</b> let **objprn** have anything to <b>eat</b> or{" "}
              <b>drink</b>
              <br />
              It might make **objprn** <b>sick</b> or cause <b>problems</b> for
              the doctor
            </p>

            <p>
              <b className="text-blue-500 fond-bold text-md">(MEDICAL)</b>
              <br />
              Just let **objprn** <b>rest</b> in the most{" "}
              <b>comfortable position</b> and wait for <b>help</b> to arrive.
            </p>

            <p>
              <b className="text-blue-500 fond-bold text-md">(TRAUMA)</b>
              <br />
              <b>Don't move</b> **objprn** <b>unless</b> it's absolutely{" "}
              <b>necessary</b>
              <br />
              Just tell **objprn** to <b>be still</b> and wait for <b>help</b>{" "}
              to arrive.
            </p>

            <div className="p-2 rounded bg-blue-500/10 text-lg font-bold">
              * The "nothing to eat or drink" instruction above should be
              omitted for the alert diabetic
            </div>
          </div>
        ),
        actions: [
          {
            title: "Stable",
            frontIcon: <ArrowRight className="w-4 h-4 text-green-400" />,
            goto: {
              class: "X",
              name: "22",
            },
          },
        ],
      },
    ],
  },
];
