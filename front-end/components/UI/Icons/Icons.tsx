interface IconProps {
  size?: number;
  className?: string;
}

interface HeartIconProps extends IconProps {
  filled?: boolean;
}

/**
 * Icône cœur (favoris). Prend la couleur de texte de son parent.
 * @param filled - remplit l'intérieur du cœur (ex. logement ajouté aux favoris)
 */
export const HeartIcon = ({ size = 14, className, filled = false }: HeartIconProps) => (
  <svg
    width={size}
    height={(size * 10) / 11}
    viewBox="0 0 11 10"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M0.5 3.24396C0.5 6.93596 5.3 9.41596 5.3 9.41596C5.3 9.41596 10.1 6.93796 10.1 3.24396C10.1 1.72996 8.872 0.501956 7.358 0.501956C6.534 0.501956 5.804 0.871955 5.3 1.44796C4.798 0.871955 4.066 0.501956 3.242 0.501956C1.728 0.499956 0.5 1.72796 0.5 3.24396Z"
      fill={filled ? "currentColor" : "none"}
    />
    <path
      d="M7.35742 0.149658C9.0624 0.149658 10.4502 1.53968 10.4502 3.24438C10.4501 5.19368 9.23491 6.79293 8.02246 7.90552C6.80667 9.02115 5.56625 9.67204 5.46094 9.72681L5.45508 9.72974C5.40968 9.75092 5.35814 9.76587 5.2998 9.76587C5.24147 9.76587 5.18993 9.75092 5.14453 9.72974L5.13867 9.72681C5.03331 9.67201 3.79295 9.02046 2.57715 7.90454C1.36473 6.79173 0.149554 5.19269 0.149414 3.24438C0.149414 1.53967 1.53721 0.149658 3.24219 0.149658C4.00333 0.149755 4.73317 0.440216 5.2998 0.952393C5.86644 0.440217 6.59628 0.149755 7.35742 0.149658ZM3.24219 0.849854C1.92318 0.849854 0.849609 1.92507 0.849609 3.24438C0.849746 4.80816 1.80066 6.16563 2.8584 7.1897C3.84331 8.14323 4.90138 8.78525 5.2998 9.01294C5.69823 8.78525 6.7563 8.14323 7.74121 7.1897C8.79895 6.16563 9.74986 4.80816 9.75 3.24438C9.75 1.92523 8.67658 0.851807 7.35742 0.851807C6.76287 0.851905 6.18759 1.08264 5.74609 1.49243L5.56445 1.67896C5.44577 1.81326 5.2354 1.83036 5.09375 1.72974L5.03711 1.67896C4.57698 1.15094 3.92164 0.849966 3.24219 0.849854Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.3}
    />
  </svg>
);

/**
 * Icône bulle de discussion (messagerie). Prend la couleur de texte de son parent.
 */
export const MessengerIcon = ({ size = 14, className }: IconProps) => (
  <svg
    width={size}
    height={(size * 9) / 11}
    viewBox="0 0 11 9"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M9.5459 0.149658C10.0443 0.14982 10.45 0.55556 10.4502 1.05396V6.36157C10.4501 6.85999 10.0443 7.26571 9.5459 7.26587H4.1582L2.74707 8.54126C2.62725 8.64966 2.47567 8.70719 2.32031 8.70728C2.23169 8.70728 2.14252 8.68881 2.05859 8.65161C1.82525 8.54763 1.67856 8.32254 1.67871 8.06665V7.26587H1.05469C0.555979 7.26587 0.149556 6.86011 0.149414 6.36157V1.05396C0.149577 0.555434 0.555991 0.149658 1.05469 0.149658H9.5459ZM1.05469 0.834229C0.933629 0.834229 0.834147 0.933222 0.833984 1.05396V6.36157C0.834127 6.48246 0.933566 6.5813 1.05469 6.5813H2.02051C2.11135 6.5813 2.19858 6.61691 2.2627 6.68091C2.3268 6.74501 2.36325 6.83219 2.36328 6.9231V7.96411L3.79688 6.66919L3.84766 6.6311C3.901 6.59854 3.96284 6.5813 4.02637 6.5813H9.5459C9.66678 6.58114 9.76548 6.48246 9.76562 6.36157V1.05396C9.76546 0.93322 9.66672 0.834391 9.5459 0.834229H1.05469Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.3}
    />
  </svg>
);

/**
 * Icône profil utilisateur (connexion / compte). Prend la couleur de texte de son parent.
 */
export const ProfileIcon = ({ size = 12, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="192 -768 576 576"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M378-522q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102t-42 102q-42 42-102 42t-102-42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm267-309.21q21-21.21 21-51T530.79-675q-21.21-21-51-21T429-674.79q-21 21.21-21 51T429.21-573q21.21 21 51 21T531-573.21ZM480-624Zm0 360Z" />
  </svg>
);

/**
 * Chevron vers le bas (ouverture/fermeture). Prend la couleur de texte de son parent.
 */
export const ChevronIcon = ({ size = 12, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
