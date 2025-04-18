

import { Input } from "../input";
import { useDebounce } from "@/hooks/use-debounce";
import LinkedinLogo from '../../../assets/LinkedinLogo.png';



type IconInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const IconInput = ({ value = "", onChange, placeholder }: IconInputProps) => {
    const debauncedValue = useDebounce(value, 300);
    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
                {!!debauncedValue && (
                    debauncedValue === "linkedin" ? (
                        <img key="linkedin" src={LinkedinLogo.src} alt="Linkedin Logo"/>
                    ) : (
                        <img
                        src={`http://cdn.simpleicons.org/${debauncedValue}`}
                        className="w-full h-full object-contain"
                        alt="icon"
                        onError={(e) => {(e.target as HTMLImageElement).style.display = 'none';}}/>
                    )
                )}
            
            </div>
            <Input 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            placeholder={placeholder} 
            />
        </div>
    )
}