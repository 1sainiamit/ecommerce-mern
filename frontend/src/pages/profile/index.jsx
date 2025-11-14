import ProfileContent from "./components/profile-content";
import ProfileHeader from "./components/profile-header";


export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-6">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}
