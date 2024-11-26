import { Box } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const error = useRouteError() as any;

  return (
    <>
        <Box>
            <p className="font-mono">
                <span className="mr-2">{error?.status}</span>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </Box>
        <Box>Error Pages</Box>
    </>
  );
}
