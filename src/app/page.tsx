import { redirect } from 'next/navigation';
import { screenStyle, modifyStyle } from 'theme/components/screen';
export default function Home({}) {
  // screenStyle();
  modifyStyle();
  redirect('/admin/default');
}
