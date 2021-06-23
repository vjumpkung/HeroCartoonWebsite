export default function Analytics() {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-HVWHM1H54W"></script>
          <script>
              window.dataLayer = window.dataLayer || [];
          
              function gtag() {
                  dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-HVWHM1H54W');
          </script>
          `,
        }}
      />
    </>
  );
}
