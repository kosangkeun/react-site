import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const btnName = "generate";

export default function SubmitButton({ style }) {
  return (
    <label htmlFor={btnName}>
      <Input type="submit" id={btnName} />
      <Button
        style={style}
        variant="contained"
        component="span"
      >
        전송
      </Button>
    </label>
  );
}