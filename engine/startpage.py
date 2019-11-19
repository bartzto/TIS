import yaml

def getRoom() {
    with open("../config/config.yaml", "r") as ymlfile:
        cfg = yaml.load(ymlfile)
    
    for section in cfg:
        print(section)
    print(cfg['Register'])
}