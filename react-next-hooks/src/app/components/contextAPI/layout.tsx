import { CounterContext } from "./crateContext/CounterContext";

export default function CounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CounterContext>{children}</CounterContext>;
}
