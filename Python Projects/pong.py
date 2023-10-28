import pygame
import random

# Initialize Pygame
pygame.init()

# Set up display
WIDTH, HEIGHT = 800, 600
WINDOW_SIZE = (WIDTH, HEIGHT)
WINDOW = pygame.display.set_mode(WINDOW_SIZE)
pygame.display.set_caption("Pong Game")

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Initialize clock
clock = pygame.time.Clock()

# Game variables
PADDLE_WIDTH, PADDLE_HEIGHT = 10, 100
BALL_SIZE = 15
PADDLE_SPEED = 5
BALL_SPEED_X = 5
BALL_SPEED_Y = 5

# Initialize paddles and ball
player_paddle = pygame.Rect(50, (HEIGHT - PADDLE_HEIGHT) // 2, PADDLE_WIDTH, PADDLE_HEIGHT)
opponent_paddle = pygame.Rect(WIDTH - 50 - PADDLE_WIDTH, (HEIGHT - PADDLE_HEIGHT) // 2, PADDLE_WIDTH, PADDLE_HEIGHT)
ball = pygame.Rect((WIDTH - BALL_SIZE) // 2, (HEIGHT - BALL_SIZE) // 2, BALL_SIZE, BALL_SIZE)

ball_direction = [random.choice([-1, 1]), random.choice([-1, 1])]

def draw_objects():
    pygame.draw.rect(WINDOW, WHITE, player_paddle)
    pygame.draw.rect(WINDOW, WHITE, opponent_paddle)
    pygame.draw.ellipse(WINDOW, WHITE, ball)

def move_ball():
    global ball_direction

    if ball.top <= 0 or ball.bottom >= HEIGHT:
        ball_direction[1] = -ball_direction[1]

    if ball.colliderect(player_paddle) or ball.colliderect(opponent_paddle):
        ball_direction[0] = -ball_direction[0]

    if ball.left <= 0:
        reset_ball()
        return "opponent_scored"
    elif ball.right >= WIDTH:
        reset_ball()
        return "player_scored"

    ball.move_ip(BALL_SPEED_X * ball_direction[0], BALL_SPEED_Y * ball_direction[1])
    return None

def show_controls_popup():
    font = pygame.font.Font(None, 36)
    text = font.render("Use 'W' and 'S' to control Player Paddle", True, WHITE)
    text_rect = text.get_rect(center=(WIDTH // 2, HEIGHT // 4))
    
    text2 = font.render("Use UP and DOWN arrows to control Opponent Paddle", True, WHITE)
    text_rect2 = text2.get_rect(center=(WIDTH // 2, HEIGHT // 4 + 40))
    
    WINDOW.blit(text, text_rect)
    WINDOW.blit(text2, text_rect2)
    
    pygame.display.update()
    pygame.time.wait(10000)  # Display message for 3 seconds

def reset_ball():
    ball.center = (WIDTH // 2, HEIGHT // 2)
    ball_direction = [random.choice([-1, 1]), random.choice([-1, 1])]

def move_paddle(paddle, up, down):
    keys = pygame.key.get_pressed()
    if keys[up] and paddle.top > 0:
        paddle.move_ip(0, -PADDLE_SPEED)
    if keys[down] and paddle.bottom < HEIGHT:
        paddle.move_ip(0, PADDLE_SPEED)

def main():
    global player_score, opponent_score
    player_score, opponent_score = 0, 0
    show_controls_popup()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        # Move paddles
        move_paddle(player_paddle, pygame.K_w, pygame.K_s)
        move_paddle(opponent_paddle, pygame.K_UP, pygame.K_DOWN)

        # Move ball and check for scoring
        score_event = move_ball()
        if score_event == "opponent_scored":
            opponent_score += 1
        elif score_event == "player_scored":
            player_score += 1

        # Draw objects
        WINDOW.fill(BLACK)
        draw_objects()

        # Draw scores
        font = pygame.font.Font(None, 36)
        player_score_text = font.render(f"Player: {player_score}", True, WHITE)
        opponent_score_text = font.render(f"Opponent: {opponent_score}", True, WHITE)
        WINDOW.blit(player_score_text, (10, 10))
        WINDOW.blit(opponent_score_text, (WIDTH - opponent_score_text.get_width() - 10, 10))

        pygame.display.update()
        clock.tick(60)

if __name__ == "__main__":
    main()
