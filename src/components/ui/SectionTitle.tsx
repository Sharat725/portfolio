
import { ReactNode } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string | ReactNode;
  center?: boolean;
};

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-purple-light">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
    </div>
  );
}
