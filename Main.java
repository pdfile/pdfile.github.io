import java.net.HttpURLConnection;
import java.net.URL;

public class Main {

    public static void main(String[] args) {
        /*
        try {
            File folder = new File("C:\\Users\\HP-EliteBook\\AquaProjects\\pdfile.github.io\\assets\\screens\\narrow");
            if (folder.exists()) {
                if (folder.isDirectory()) {
                    for (File file : folder.listFiles()) {
                        String fileName = file.getName();
                        System.out.println("{\n" +
                                "      \"src\": \"assets/screens/narrow/" + fileName + "\",\n" +
                                "      \"sizes\": \"720x1380\",\n" +
                                "      \"type\": \"image/jpeg\",\n" +
                                "      \"form_factor\": \"narrow\",\n" +
                                "      \"label\": \"Homescreen\"\n" +
                                "    },");
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }*/
        /*
        try {
            String folderPath = "C:\\Users\\HP-EliteBook\\Downloads\\icons_pdfiles_old";
            File folder = new File(folderPath);
            if (folder.exists()) {
                if (folder.isDirectory()) {
                    Path pathFolder = Path.of(folderPath);
                    Files.walk(pathFolder).filter(Files::isRegularFile).forEach(new Consumer<Path>() {
                        @Override
                        public void accept(Path path) {
                            try {
                                String filePath = path.toString();
                                String fileName = String.valueOf(path.getFileName());
                                String fileExtension = fileName.substring(fileName.lastIndexOf("."));
                                Path pathSrc = Paths.get(filePath);
                                File file = new File(filePath);
                                BufferedImage image = ImageIO.read(file);
                                int width = image.getWidth();
                                int height = image.getHeight();
                                Path pathDest = Paths.get("C:\\Users\\HP-EliteBook\\Downloads\\icons_pdfiles\\icon-" + width + "x" + height + fileExtension);
                                Files.move(pathSrc, pathDest);
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    });
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }*/
        for (int i = 0; i < 1000; i++) {
            //http_requests("https://profile-counter.glitch.me/m-asadullah/count.svg", i);
            //https://hits.sh/github.com/silentsoft/hits/
            http_requests("https://hits.sh/github.com/m-asadullah/hits.svg", i);
        }

    }

    private static void http_requests(String stringURL, int index) {
        try {
            URL url = new URL(stringURL);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.setUseCaches(true);
            httpURLConnection.setDefaultUseCaches(true);
            httpURLConnection.setConnectTimeout(60 * 1000);
            httpURLConnection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36");
            int responseCode = httpURLConnection.getResponseCode();
            if (responseCode == 200) {
                System.out.println(index + "; Done: " + responseCode);
            } else {
                System.err.println(index + "; Error: " + responseCode);
            }
            httpURLConnection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
