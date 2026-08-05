const router = {
  get(path, handler) {
    return {path, handler};
  },
};

export function healthStatus() {
  return {status: 'ok', monitored: true};
}

export const healthRoute = router.get('/health', healthStatus);
