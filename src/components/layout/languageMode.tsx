import { useRouter, usePathname } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useParams } from 'next/navigation';

const languages = [
    {
        value: 'en',
        label: 'EN'
    },{
        value: 'zh',
        label: '中'
    }
]

export function LanguageMode() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const currentLocale = params.locale as string;

    const handleLocaleChange = (newLocale: string) => {
        console.log(newLocale);
        router.replace(pathname, { locale: newLocale })
    };

    const currentLanguage = languages.find(lang => lang.value === currentLocale);

    return (
        <Select value={currentLocale} onValueChange={handleLocaleChange}>
            <SelectTrigger className="w-[180px] text-black" >
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {
                    languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                            {lang.label}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}