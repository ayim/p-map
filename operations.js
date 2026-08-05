const router = {
  get(path, handler) {
    return {path, handler};
  },
};

export function healthStatus() {
  return {status: 'ok'};
}

export const healthRoute = router.get('/health', healthStatus);
