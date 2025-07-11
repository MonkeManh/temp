import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, X } from "lucide-react";
import { useState, useEffect } from "react";

interface MultiSelectOption {
  value: string;
  label: string;
  display: string;
  questionDisplay: string;
}

interface MultiSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedValues: string[]) => void;
  title: string;
  options: MultiSelectOption[];
  placeholder?: string;
}

export function MultiSelectModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  options,
  placeholder = "Select options..."
}: MultiSelectModalProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSelectedValues([]);
    }
  }, [isOpen]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      // Ensure no duplicates by checking if value already exists
      setSelectedValues(prev => {
        if (prev.includes(value)) {
          return prev; // Already exists, don't add
        }
        return [...prev, value];
      });
    } else {
      setSelectedValues(prev => prev.filter(v => v !== value));
    }
  };

  const handleConfirm = () => {
    if (selectedValues.length > 0) {
      onConfirm(selectedValues);
      onClose();
    }
  };

  const handleSelectAll = () => {
    // Use Set to ensure unique values
    const uniqueValues = [...new Set(options.map(option => option.value))];
    setSelectedValues(uniqueValues);
  };

  const handleDeselectAll = () => {
    setSelectedValues([]);
  };

  const getSelectedLabels = () => {
    return options
      .filter(option => selectedValues.includes(option.value))
      .map(option => option.display)
      .join(", ");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 flex-1 min-h-0">
          {/* Selection Summary */}
          <div className="p-3 bg-muted rounded-md">
            <p className="text-sm text-muted-foreground mb-1">
              Selected ({selectedValues.length}):
            </p>
            <p className="text-sm font-medium">
              {selectedValues.length > 0 ? getSelectedLabels() : "None selected"}
            </p>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSelectAll}
              disabled={selectedValues.length === options.length}
            >
              Select All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeselectAll}
              disabled={selectedValues.length === 0}
            >
              Deselect All
            </Button>
          </div>

          {/* Options List */}
          <div className="flex-1 overflow-y-auto border rounded-md p-2">
            <div className="space-y-2">
              {options.map((option, index) => (
                <label
                  key={`${option.value}-${index}`}
                  htmlFor={`checkbox-${option.value}-${index}`}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 cursor-pointer"
                >
                  <Checkbox
                    id={`checkbox-${option.value}-${index}`}
                    checked={selectedValues.includes(option.value)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(option.value, checked as boolean)
                    }
                  />
                  <span className="text-sm font-medium leading-none flex-1">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-2 border-t">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={selectedValues.length === 0}
              className="flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Confirm ({selectedValues.length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
