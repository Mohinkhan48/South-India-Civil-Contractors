import os

try:
    import cv2
    print("cv2 is available")
    videos_dir = r"c:\Users\User\OneDrive\Documents\Desktop\south india civil contractors\public\videos"
    for f in sorted(os.listdir(videos_dir)):
        if "WA003" in f:
            filepath = os.path.join(videos_dir, f)
            cap = cv2.VideoCapture(filepath)
            ret, frame = cap.read()
            fourcc = int(cap.get(cv2.CAP_PROP_FOURCC))
            codec = "".join([chr((fourcc >> 8 * i) & 0xFF) for i in range(4)])
            fps = cap.get(cv2.CAP_PROP_FPS)
            frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            print(f"{f}: can_read={ret}, codec={codec}, fps={fps}, frame_count={frame_count}")
            cap.release()
except Exception as e:
    print(f"Error checking with cv2: {e}")
