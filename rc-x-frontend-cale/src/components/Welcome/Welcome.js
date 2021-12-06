import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Link, DropDown, GU, Layout, Split, useTheme } from "@aragon/ui";
import Header from "../Header/Header";

const Welcome = React.memo(function Welcome() {
  const theme = useTheme();

  return (
    <Layout
      breakpoints={{
        medium: 84 * GU,
        large: 112 * GU,
      }}
      css={`
        & > header {
          margin-top: 10px;
        }
      `}
    >
      <Header
        title="Welcome to Radiochain"
        subtitle="Turning the world's music library into an energetic stock market."
        calltoaction="Stay tuned for more features and updates. "
      />
    </Layout>
  );
});

export default Welcome;
