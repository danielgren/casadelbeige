const light = {
  background: "26, 100%, 95%",
  text: "21, 43%, 65%",
};

export type ColorTypes = keyof typeof light;

type GetColorsFunc = (name: ColorTypes, opacity?: number | undefined) => string;

export const getColor: GetColorsFunc = (name, opacity = undefined) => {
  if (opacity !== undefined) {
    return `hsla(${light[name]}, ${opacity})`;
  }
  return `hsl(${light[name]})`;
};
