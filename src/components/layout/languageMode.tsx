'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <>
            <Select value={locale} onValueChange={handleLocaleChange}>
                <SelectTrigger className="text-black" >
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
        </>

    )
}