import useChannels from "@/hooks/useChannels";
import useInterestChannels from "@/hooks/useInterestChannels";
import useUserId from "@/hooks/useUserId";
import useUserProfile from "@/hooks/useUserProfile";

const useUserData = () => {
  const userId = useUserId();

  useChannels();
  useInterestChannels(userId);
  useUserProfile(userId);
};

export default useUserData;
