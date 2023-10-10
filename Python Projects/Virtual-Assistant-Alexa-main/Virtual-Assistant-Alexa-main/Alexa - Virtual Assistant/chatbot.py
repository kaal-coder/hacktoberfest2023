import random

Hello = ('hello', 'hey', 'hii', 'hi')

reply_Hello = ('Hello Sir , I Am Jarvis .',
               "Hey , What's Up ?",
               "Hey How Are You ?",
               "Hello Sir , Nice To Meet You Again .",
               "Of Course Sir , Hello .")

Bye = ('bye', 'exit', 'sleep', 'go')

reply_bye = ('Bye Sir.',
             "It's Okay .",
             "It Will Be Nice To Meet You .",
             "Bye.",
             "Thanks.",
             "Okay.")

How_Are_You = ('how are you', 'are you fine')

reply_how = ('I Am Fine.',
             "Excellent .",
             "Moj Ho rhi Hai .",
             "Absolutely Fine.",
             "I'm Fine.",
             "Thanks For Asking.")

nice = ('nice', 'good', 'thanks')

reply_nice = ('Thanks .',
              "Ohh , It's Okay .",
              "Thanks To You.")

Functions = ['functions', 'abilities', 'what can you do', 'features']

reply_Functions = ('I Can Perform Many Task Or Varieties Of Tasks , How Can I Help You ?',
                   'I Can Call Your G.F .',
                   'I Can Message Your Mom That You Are Not Studying..',
                   'I Can Tell Your Class Teacher That You Had Attended All The Online Classes On Insta , Facebook '
                   'etc!',
                   'Let Me Ask You First , How Can I Help You ?',
                   'If You Want Me To Tell My Features , Call : Print Features !')

sorry_reply = ("Sorry , That's Beyond My Abilities .",
               "Sorry , I Can't Do That .",
               "Sorry , That's Above Me.")


def ChatterBot(Text):
    # Text = str(Text)

    for word in Text:

        if word in Hello:

            reply = random.choice(reply_Hello)

            return reply

        elif word in Bye:

            reply = random.choice(reply_bye)

            return reply

        elif word in How_Are_You:

            reply_ = random.choice(reply_how)

            return reply_

        elif word in Functions:

            reply___ = random.choice(reply_Functions)

            return reply___

        else:

            return random.choice(sorry_reply)
