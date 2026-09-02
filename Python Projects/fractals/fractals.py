import pygame

pygame.init()

screen_width = 800
screen_height = 600
max_iterations = 1000
maxX = 1.65
minX = -1.65
maxY = 1.65
minY = -1.65

fps = 60

screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Fractals!")


def mandelbrotSet(c):
  z = complex(0)
  i = 0
  for i in range(0, max_iterations):
    if abs(z) > 1.65:
      break
    z = z * z + c
  return i


running = True
clock = pygame.time.Clock()

while running:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False

  surface = pygame.Surface((screen_width, screen_height))

  xStep = (maxX - minX) / screen_width
  yStep = (maxY - minY) / screen_height

  for y in range(0, screen_height):
    for x in range(0, screen_width):
      c = complex(x * xStep + minX, y * yStep + minY)
      value = mandelbrotSet(c)
      color = ((value * 10) % 256, (value * 5) % 256, (value * 20) % 256)
      surface.set_at((x, y), color)

  screen.blit(surface, (0, 0))
  pygame.display.flip()
  clock.tick(fps)

pygame.quit()
