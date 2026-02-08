export const metadata = {
  title: 'Phoenix Precious Metals Exchange',
  description: 'Professional precious metals trading on Coreum blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
