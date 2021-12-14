import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";

export function Spinner() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton
        loading
        loadingPosition="end"
        size="large"
        fullWidth={true}
      >
        loading chart
      </LoadingButton>
    </Stack>
  );
}
