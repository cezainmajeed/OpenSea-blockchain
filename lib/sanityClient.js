import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId : "z59hgmt9",
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skFhULqdL9NXbV0FsbQmtlNAxZJOy7CTLV2GDYSpVIVX0sjQpmCHCafxVymZaAUkGKdFZrPsjjPfR56GIfQZ8upGgwUtqtSKpnU9vt0PbYv1SemMhcmATOM2s9LUqDS02dhVMKGUyntBxgVlvvBOZexruvFb3gAQ3T3tYTqzDiZ6WvT2zgTh',
  useCdn: false,
});
