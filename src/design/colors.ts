const light = {
  background: "26, 100%, 95%",
};

type GetColorsFunc = (
  name: keyof typeof light,
  opacity?: number | undefined
) => string;

export const getColor: GetColorsFunc = (name, opacity = undefined) => {
  if (opacity !== undefined) {
    return `hsla(${light[name]}, ${opacity})`;
  }
  return `hsl(${light[name]})`;
};
