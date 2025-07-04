"use client";

import { postalData } from "@/data/locations/postals";
import { IPostal } from "@/models/interfaces/locations/IPostal";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Combobox } from "../ui/combobox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
import LoadingState from "../loading-state";

const formSchema = z.object({
  postal: z.string().min(1, "Postal code is required"),
  street: z.string().min(1, "Street name is required"),
  buildingInfo: z.string().optional(),
  crossStreet1: z.string().min(1, "Cross street 1 is required"),
  crossStreet2: z.string().min(1, "Cross street 2 is required"),
  callerName: z.string().optional(),
  callerNumber: z.string().optional(),
  isLocalCaller: z.boolean().optional(),
  callerStatement: z.string(),
  service: z.enum(["Police", "Fire", "EMS"], {
    required_error: "Service is required",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const formatPhoneNumber = (value: string, onComplete?: () => void): string => {
  const digits = value.replace(/\D/g, "");

  const truncatedDigits = digits.slice(0, 10);

  if (truncatedDigits.length === 10 && onComplete) {
    setTimeout(onComplete, 0);
  }

  if (truncatedDigits.length <= 3) {
    return truncatedDigits;
  } else if (truncatedDigits.length <= 6) {
    return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(3)}`;
  } else {
    return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(
      3,
      6
    )}-${truncatedDigits.slice(6, 10)}`;
  }
};

export default function CreateCallForm() {
  const [initialValues, setInitialValues] = useState<FormValues>({
    postal: "",
    street: "",
    buildingInfo: "",
    crossStreet1: "",
    crossStreet2: "",
    callerName: "",
    callerNumber: "",
    isLocalCaller: false,
    callerStatement: "",
    service: "Police",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [selectedPostal, setSelectedPostal] = useState<IPostal | undefined>(
    undefined
  );
  const [selectedStreet, setSelectedStreet] = useState<string>("");
  const postalRef = useRef<HTMLButtonElement>(null);
  const streetRef = useRef<HTMLButtonElement>(null);
  const buildingInfoRef = useRef<HTMLInputElement>(null);
  const callerNameRef = useRef<HTMLInputElement>(null);
  const callerNumberRef = useRef<HTMLInputElement>(null);
  const localCallerRef = useRef<HTMLButtonElement>(null);
  const callerStatementRef = useRef<HTMLTextAreaElement>(null);
  const createCallRef = useRef<HTMLButtonElement>(null);
  const postalOptions = useMemo(
    () =>
      postalData.map((postal) => ({
        value: postal.postal,
        label: postal.postal,
      })),
    []
  );
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const { watch } = form;
  const callerName = watch("callerName");
  const callerNumber = watch("callerNumber");

  const validateForm = (data: Partial<FormValues>): boolean => {
    return !!(
      data.postal &&
      data.street &&
      data.crossStreet1 &&
      data.crossStreet2 &&
      data.service
    );
  };

  const getPostal = (p: string): IPostal | undefined => {
    return postalData.find((postal) => postal.postal === p);
  };

  const handlePostalChange = (postal: string): void => {
    const postalObj = getPostal(postal);
    if (!postalObj) return;
    form.setValue("postal", postal);
    setSelectedPostal(postalObj);

    // Clear previous values of streets
    form.setValue("street", "");
    form.setValue("crossStreet1", "");
    form.setValue("crossStreet2", "");

    if (!postalObj.streets.autoFill || !postalObj.streets.mainStreet) return;

    form.setValue("street", postalObj.streets.mainStreet);
    form.setValue(
      "crossStreet1",
      postalObj.streets.crossStreet1 || "Not Found"
    );
    form.setValue(
      "crossStreet2",
      postalObj.streets.crossStreet2 || "Not Found"
    );
    buildingInfoRef.current?.focus();
  };

  const onSubmit = async (values: FormValues): Promise<void> => {
    setIsSubmitting(true);

    const callData = {
      postal: values.postal,
      street: values.street,
      buildingInfo: values.buildingInfo,
      crossStreet1: values.crossStreet1,
      crossStreet2: values.crossStreet2,
      callerName: values.callerName,
      callerNumber: values.callerNumber,
      isLocalCaller: values.isLocalCaller || false,
      callerStatement: values.callerStatement,
      service: values.service,
    };

    localStorage.setItem("NEW_CALL", JSON.stringify(callData));

    if (callData.service === "Police") {
      router.push("/create-call/police");
    } else if (callData.service === "Fire") {
      router.push("/create-call/fire");
    } else if (callData.service === "EMS") {
      router.push("/create-call/ems");
    } else {
      console.error("Unknown service type:", callData.service);
    }
    setIsSubmitting(false);
  };

  // Load the saved call (if one exists) from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("NEW_CALL");
    if (!saved) return setIsLoading(false);

    const parsed = JSON.parse(saved);
    const values = {
      postal: parsed.postal || "",
      street: parsed.street || "",
      buildingInfo: parsed.buildingInfo || "",
      crossStreet1: parsed.crossStreet1 || "",
      crossStreet2: parsed.crossStreet2 || "",
      callerName: parsed.callerName || "",
      callerNumber: parsed.callerNumber || "",
      isLocalCaller: parsed.isLocalCaller || false,
      callerStatement: parsed.callerStatement || "",
      service: parsed.service || "Police",
    };
    setInitialValues(values);
    setSelectedPostal(getPostal(values.postal));
    setSelectedStreet(values.street);
    form.reset(values);
    setIsFormValid(validateForm(values));
    setIsLoading(false);
  }, [form]);

  // Set the postal to fill the cross streets - possible redundency from last useEffect, will look into it
  useEffect(() => {
    if (initialValues.postal) {
      const matchedPostal = getPostal(initialValues.postal);
      if (matchedPostal) {
        setSelectedPostal(matchedPostal);
      }
    }
  }, [initialValues.postal]);

  //   I feel like this may be redundant as well
  useEffect(() => {
    if (initialValues.street) {
      setSelectedStreet(initialValues.street);
    }
  }, [initialValues.street]);

  //   Handle street selection???
  useEffect(() => {
    if (!selectedPostal || !selectedStreet) return;

    const roads = selectedPostal.streets?.availableRoads;
    const roadData = roads?.[selectedStreet];

    if (roadData) {
      if (!form.getValues("crossStreet1")) {
        form.setValue("crossStreet1", roadData.crossStreet1 || "");
      }
      if (!form.getValues("crossStreet2")) {
        form.setValue("crossStreet2", roadData.crossStreet2 || "");
        buildingInfoRef.current?.focus();
      }
    }
  }, [selectedPostal, selectedStreet, form]);

  //   Handle form changes and validation
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "postal") {
        const postalCode = value.postal;
        if (!postalCode) return;

        const postalObj = getPostal(postalCode);
        form.setValue("street", "");
        form.setValue("crossStreet1", "");
        form.setValue("crossStreet2", "");

        if (postalObj?.streets?.autoFill && postalObj?.streets?.mainStreet) {
          form.setValue("street", postalObj?.streets?.mainStreet);
          form.setValue(
            "crossStreet1",
            postalObj?.streets?.crossStreet1 || "Not Found"
          );
          form.setValue(
            "crossStreet2",
            postalObj?.streets?.crossStreet2 || "Not Found"
          );
          buildingInfoRef.current?.focus();
        } else {
          streetRef.current?.click();
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((data) => {
      setIsFormValid(validateForm(data));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Card className="max-w-5xl mx-auto">
      {!isLoading ? (
        <>
          <CardHeader>
            <CardTitle className="text-2xl">Create New Call</CardTitle>
            <CardDescription>Enter the pre-case information</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="postal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Combobox
                            options={postalOptions}
                            value={field.value ?? ""}
                            autoFocus={!initialValues.postal}
                            onValueChange={handlePostalChange}
                            placeholder="Select postal code"
                            searchPlaceholder="Search postal codes..."
                            ref={postalRef}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => {
                      const currentPostal = selectedPostal;
                      let availableOptions: { value: string; label: string }[] =
                        [];

                      // Check if the postal code has auto-filled streets
                      if (
                        currentPostal?.streets?.autoFill &&
                        currentPostal.streets.mainStreet
                      ) {
                        availableOptions = [
                          {
                            value: currentPostal.streets.mainStreet,
                            label: currentPostal.streets.mainStreet,
                          },
                        ];
                      } else if (currentPostal?.streets?.availableRoads) {
                        // If available roads are present, use them
                        availableOptions = Object.keys(
                          currentPostal.streets.availableRoads
                        ).map((road) => ({
                          value: road,
                          label: road,
                        }));
                      } else {
                        // Fallback to default street options
                        availableOptions = [
                          {
                            value: "Not Found",
                            label: "Not Found",
                          },
                        ];
                      }

                      return (
                        <FormItem>
                          <FormLabel>Street</FormLabel>
                          <FormControl>
                            <Combobox
                              options={availableOptions}
                              value={field.value || ""}
                              onValueChange={(value) => {
                                setSelectedStreet(value);
                                field.onChange(value);
                                form.setValue("crossStreet1", "");
                                form.setValue("crossStreet2", "");
                              }}
                              placeholder="Select street"
                              searchPlaceholder="Search streets..."
                              disabled={Boolean(
                                currentPostal?.streets?.autoFill
                              )}
                              ref={streetRef}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="crossStreet1"
                    render={({ field }) => {
                      const currentPostal = selectedPostal;
                      const currentStreet = selectedStreet;
                      let availableOptions: { value: string; label: string }[] =
                        [];

                      if (
                        currentPostal?.streets?.autoFill &&
                        currentPostal.streets.crossStreet1
                      ) {
                        availableOptions = [
                          {
                            value: currentPostal.streets.crossStreet1,
                            label: currentPostal.streets.crossStreet1,
                          },
                        ];
                      } else if (
                        currentPostal?.streets?.availableRoads &&
                        currentStreet
                      ) {
                        const roadInfo =
                          currentPostal.streets.availableRoads[currentStreet];
                        if (roadInfo) {
                          availableOptions = [
                            {
                              value: roadInfo.crossStreet1,
                              label: roadInfo.crossStreet1,
                            },
                          ];
                        }
                      } else {
                        availableOptions = [
                          {
                            value: "Not Found",
                            label: "Not Found",
                          },
                        ];
                      }

                      const isDisabled = Boolean(
                        currentPostal?.streets?.autoFill ||
                          (currentPostal?.streets?.availableRoads &&
                            currentStreet)
                      );

                      return (
                        <FormItem>
                          <FormLabel>Cross Street 1</FormLabel>
                          <FormControl>
                            <Combobox
                              options={availableOptions}
                              value={field.value || ""}
                              onValueChange={field.onChange}
                              placeholder="Select street"
                              searchPlaceholder="Search streets..."
                              disabled={isDisabled}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="crossStreet2"
                    render={({ field }) => {
                      const currentPostal = selectedPostal;
                      const currentStreet = selectedStreet;
                      let availableOptions: { value: string; label: string }[] =
                        [];

                      if (
                        currentPostal?.streets?.autoFill &&
                        currentPostal.streets.crossStreet2
                      ) {
                        availableOptions = [
                          {
                            value: currentPostal.streets.crossStreet2,
                            label: currentPostal.streets.crossStreet2,
                          },
                        ];
                      } else if (
                        currentPostal?.streets?.availableRoads &&
                        currentStreet
                      ) {
                        const roadInfo =
                          currentPostal.streets.availableRoads[currentStreet];
                        if (roadInfo) {
                          availableOptions = [
                            {
                              value: roadInfo.crossStreet2,
                              label: roadInfo.crossStreet2,
                            },
                          ];
                        }
                      } else {
                        availableOptions = [
                          {
                            value: "Not Found",
                            label: "Not Found",
                          },
                        ];
                      }

                      const isDisabled = Boolean(
                        currentPostal?.streets?.autoFill ||
                          (currentPostal?.streets?.availableRoads &&
                            currentStreet)
                      );

                      return (
                        <FormItem>
                          <FormLabel>Cross Street 2</FormLabel>
                          <FormControl>
                            <Combobox
                              options={availableOptions}
                              value={field.value || ""}
                              onValueChange={field.onChange}
                              placeholder="Select street"
                              searchPlaceholder="Search streets..."
                              disabled={isDisabled}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="buildingInfo"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Location Info</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Apartment, suite, unit, etc."
                            {...field}
                            ref={buildingInfoRef}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="callerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Caller Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            value={field.value || ""}
                            onChange={field.onChange}
                            ref={callerNameRef}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4 items-start">
                    {/* Caller Number Field */}
                    <FormField
                      control={form.control}
                      name="callerNumber"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Caller Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(XXX) XXX-XXXX"
                              {...field}
                              value={field.value || ""}
                              onChange={(e) => {
                                const formatted = formatPhoneNumber(
                                  e.target.value,
                                  () => {
                                    callerStatementRef.current?.focus();
                                  }
                                );
                                field.onChange(formatted);
                              }}
                              inputMode="numeric"
                              ref={callerNumberRef}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {(callerName || callerNumber) && (
                    <div className="md:col-span-2 my-[-0.5rem] mb-2">
                      <FormField
                        control={form.control}
                        name="isLocalCaller"
                        render={({ field }) => (
                          <FormItem className="flex items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                ref={localCallerRef}
                              />
                            </FormControl>
                            <FormLabel className="mb-0">Local Caller</FormLabel>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  <FormField
                    control={form.control}
                    name="callerStatement"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Caller Statement</FormLabel>
                        <FormDescription>
                          A small description of what the caller is saying.
                        </FormDescription>
                        <FormControl>
                          <Textarea
                            placeholder="Enter dispatch details..."
                            className="min-h-[80px]"
                            {...field}
                            value={field.value || ""}
                            ref={callerStatementRef}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Service</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Police">
                              Police Department
                            </SelectItem>
                            <SelectItem value="Fire">
                              Fire Department
                            </SelectItem>
                            <SelectItem value="EMS">
                              Emergency Medical Services
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-row-reverse w-full justify-start items-center">
                  <Button
                    type="submit"
                    variant="destructive"
                    disabled={isSubmitting || !isFormValid}
                    ref={createCallRef}
                    className="focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
                  >
                    {isSubmitting ? "Creating..." : "Create Call"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowCancelModal(true);
                    }}
                    disabled={isSubmitting}
                    className="mr-4"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <Dialog open={showCancelModal} onOpenChange={setShowCancelModal}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cancel Call Creation?</DialogTitle>
              </DialogHeader>
              <p>
                This will delete all entered details. Are you sure you want to
                cancel?
              </p>
              <DialogFooter className="mt-4 flex justify-end gap-2">
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => setShowCancelModal(false)}
                >
                  Go Back
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setShowCancelModal(false);
                    localStorage.removeItem("NEW_CALL");

                    localStorage.removeItem("EMS_PROQA_DATA");
                    localStorage.removeItem("EMS_CASE");
                    localStorage.removeItem("CASE_TIME");
                    router.push("/dispatch");
                  }}
                  className="cursor-pointer"
                >
                  Yes, Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div className="w-full min-h-[60vh] flex items-center justify-center">
          <LoadingState />
        </div>
      )}
    </Card>
  );
}
