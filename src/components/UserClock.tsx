'use client'
import { useEffect, useState } from 'react';

const timeZoneAbbreviations: Record<string, string> = {
  'America/Sao_Paulo': 'BRT',
  'America/New_York': 'EST',
  'America/Chicago': 'CST',
  'America/Denver': 'MST',
  'America/Los_Angeles': 'PST',
  'Europe/London': 'GMT',
  'Europe/Paris': 'CET',
  'Asia/Tokyo': 'JST',
  'Asia/Shanghai': 'CST',
  'Australia/Sydney': 'AEST',
};

interface UserClockProps {
    className?: string;
    }

export function UserClock({className}: UserClockProps) {
    const [time, setTime] = useState(new Date());
    const [timezone, setTimezone] = useState<string | null>(null);
    const [timezoneAbbreviation, setTimezoneAbbreviation] = useState<string | null>(null);

    useEffect(() => {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(userTimezone);

        const abbreviation = timeZoneAbbreviations[userTimezone];
        setTimezoneAbbreviation(abbreviation);

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString('pt-BR', {
        timeZone: timezone || 'UTC',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <span className={className}>{formattedTime} {timezoneAbbreviation}</span>
    );
}