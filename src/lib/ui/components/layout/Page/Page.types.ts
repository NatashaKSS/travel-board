export interface PageProps {
  children: NonNullable<React.ReactNode>;
  widthConstraintType?: WidthContraintType;
}

export type WidthContraintType = 'TIGHT' | 'MEDIUM';
