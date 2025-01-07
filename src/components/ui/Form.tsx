// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import React,{useState} from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";




// Country Codes Data
const countryCodes: {
  code: string;
  country: string;
  flag?: string;
}[] = [
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
] as const;



interface PhoneInputProps {
  value: string;
  className: string;
  placeholder: string;
  name: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
}

// Phone Input Component
const PhoneInput: React.FC<PhoneInputProps> = ({ value, className, placeholder,name,onChange, ...props  }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');
  const radius = 100;
  const [visible, setVisible] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  React.useEffect(() => {
    if (value) {
      const country = countryCodes.find(c => value.startsWith(c.code)) || countryCodes[0];
      setSelectedCountry(country.code);
      setPhoneNumber(value.replace(country.code, ''));
    }
  }, [value]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '');
    setPhoneNumber(cleaned);
    const fullNumber = `${selectedCountry}${cleaned}`;
    onChange({
      target: {
        name: 'phoneNumber',
        value: fullNumber
      }
    });
  };

  const changeCountry = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setSelectedCountry(value);
    const fullNumber = `${value}${phoneNumber}`;
    onChange({
      target: {
        name: 'phoneNumber',
        value: fullNumber
      }
    });
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <div className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400">
        <select
          value={selectedCountry}
          className='w-[25%] sm:w-[15%] md:w-[25%] bg-transparent text-neutral-400 pl-2 '
          onChange={changeCountry}
        >
          {countryCodes.map((country) => (
            <option
              key={country.code}
              value={country.code}
              className="bg-zinc-800 p-2 focus:bg-neutral-800"
            >
              {selectedCountry === country.code ? country.code : `${country.code} ${country.country}`}
            </option>
          ))}
        </select>

        <input
          type="tel"
          className={cn(`w-[75%] sm:w-[85%] md:w-[80%] bg-transparent pl-1`,className
          )}
          placeholder={placeholder}
          name={name}
          onChange={handlePhoneChange}
          value={phoneNumber}
          {...props}
        />
        
      </div>
    </motion.div>
  );
};

PhoneInput.displayName = "PhoneInput";



// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

  const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
 


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";







// Existing Input and Label exports remain unchanged
// Input component exports...

// New Dropdown Component
type DropdownProps = SelectPrimitive.SelectProps & {
  className?: string;
};

// Modified Dropdown component
const Dropdown = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  DropdownProps
// eslint-disable-next-line @typescript-eslint/no-unused-vars
>((props, _ref) => {  // Using _ref to indicate it's not used
  const { children, className, ...rest } = props;
  return (
    <div className={className}>
      <SelectPrimitive.Root {...rest}>
        {children}
      </SelectPrimitive.Root>
    </div>
  );
});
Dropdown.displayName = "Dropdown";

const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    placeholder?: string;
  }
>(({ className, placeholder, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-neutral-400 
          shadow-input rounded-md px-3 py-2 text-sm 
          placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 
          dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/input:shadow-none transition duration-400
          flex items-center justify-between`,
          className
        )}
        {...props}
      >
        <SelectPrimitive.Value placeholder={placeholder || "Select an option"} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    </motion.div>
  );
});
DropdownTrigger.displayName = "DropdownTrigger";

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        `bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-700 
        rounded-md shadow-lg z-50 min-w-[8rem] p-1 
        data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95`,
        className
      )}
      position="popper"
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
DropdownContent.displayName = "DropdownContent";

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex w-full cursor-default select-none items-center 
      rounded-sm py-1.5 px-2 text-sm outline-none 
      focus:bg-neutral-100 dark:focus:bg-neutral-800 
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
DropdownItem.displayName = "DropdownItem";



export { 
  Input, 
  Label, 
  PhoneInput,
  Dropdown, 
  DropdownTrigger, 
  DropdownContent, 
  DropdownItem 
};