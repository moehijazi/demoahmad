import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      chunkSizeWarningLimit:1500,
        output:{
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
                if (id.includes("@aws-amplify")) {
                    return "vendor_aws";
                } else if (id.includes("@material-ui")) {
                    return "vendor_mui";
                }
            
                return "vendor"; // all other package goes here
            }
            },
        }
    }
}
});
