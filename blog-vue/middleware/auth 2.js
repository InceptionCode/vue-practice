export default function ({store, redirect}) {
  if (!store.getters.isAuthenticated) {
    redirect('/app/admin/auth');
  }
}
