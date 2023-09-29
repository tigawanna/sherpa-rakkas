interface ThemeToggleProps {}

export function ThemeToggle({}: ThemeToggleProps) {
const theme_list = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter"]
  return (
    <select
      data-choose-theme
      className=" min-w-xs select select-sm bg-secondary/60 pl-2 pr-0"
      onChange={(e) => (document.cookie = `theme=${e.target.value}`)}
    >
      {theme_list.map((theme) => {
        return (
          <option key={theme} value={theme}>
            {theme}
          </option>
        );
      })}
    </select>
  );
}
