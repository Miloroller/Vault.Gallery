// src/components/seo/SeoSchema.jsx
import { Helmet } from "react-helmet-async";

export default function SeoSchema({ schema }) {
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
