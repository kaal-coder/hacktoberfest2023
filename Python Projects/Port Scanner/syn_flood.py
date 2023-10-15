import socket
import os

def enable_syn_cookies():
    with open("/proc/sys/net/ipv4/tcp_syncookies", "w") as file:
        file.write("1")

def protect(target_ip, target_port):
    enable_syn_cookies()

    # Create a socket
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Bind the socket to the target IP and port
    s.bind((target_ip, target_port))

    # Listen for incoming connections
    s.listen(5)

    print(f"Listening on {target_ip}:{target_port}...")

    while True:
        try:
            client_socket, addr = s.accept()
            print(f"Received connection from {addr[0]}:{addr[1]}")
            client_socket.send("Thank you for connecting.".encode())
            client_socket.close()
        except socket.error as e:
            print(f"Socket error: {str(e)}")

if __name__ == "__main__":
    target_ip = "0.0.0.0"  # Use the IP address you want to protect
    target_port = 80  # Use the port you want to protect

    protect(target_ip, target_port)
