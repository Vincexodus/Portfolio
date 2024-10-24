import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks/useMounted";
import { Moon, SunDim } from "lucide-react";

export function ThemeSwitch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  const isDarkMode = theme === "dark";
  const flipTheme = (): void => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="px-2 border rounded-md border-gray-700 bg-white dark:bg-[#09090b] py-2">
      <button
        onClick={flipTheme}
        className="flex items-center justify-center gap-2 text-xs font-medium rounded-md"
      >
        {isDarkMode ? (
          <Moon className="text-black dark:text-white" size={20} />
        ) : (
          <SunDim className="text-black dark:text-white" size={20} />
        )}
      </button>
    </div>
  );
}