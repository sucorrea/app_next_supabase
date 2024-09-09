'use client';
import { useEffect, useState } from 'react';

import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ICON_SIZE = 16;

const CLASS_ICON = 'text-muted-foreground';

const icons: Record<'dark' | 'light' | 'system' | string, JSX.Element> = {
  light: <Sun key="light" size={ICON_SIZE} className={CLASS_ICON} />,
  dark: <Moon key="dark" size={ICON_SIZE} className={CLASS_ICON} />,
  system: <Laptop key="system" size={ICON_SIZE} className={CLASS_ICON} />,
};

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={'sm'}>
          {icons[theme ?? 'system']}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          <DropdownMenuRadioItem className="flex gap-2" value="light">
            {icons['light']} <span>Claro</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="dark">
            {icons['dark']} <span>Escuro</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="system">
            {icons['system']} <span>Sistema</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
