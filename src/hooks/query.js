export const useQuery = ({ pathname }) => {
  return pathname.split('/')[2];
}
