import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix

DATA_PATH = "data/children_mental_health.csv"
MODEL_OUT = "data/model.pkl"
SCALER_OUT = "data/scaler.pkl"

def train():
    df = pd.read_csv(DATA_PATH)
    X = df.drop(columns=['label'])
    y = df['label'].astype(str)

    if 'gender' in X.columns:
        X['gender'] = X['gender'].astype(str)
        le_gender = LabelEncoder()
        X['gender'] = le_gender.fit_transform(X['gender'])

    imp = SimpleImputer(strategy='mean')
    X_imputed = pd.DataFrame(imp.fit_transform(X), columns=X.columns)

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X_imputed)

    le_y = LabelEncoder()
    y_enc = le_y.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_enc, test_size=0.2, random_state=42, stratify=y_enc)

    model = RandomForestClassifier(n_estimators=150, random_state=42, class_weight='balanced')
    model.fit(X_train, y_train)

    preds = model.predict(X_test)
    print("Accuracy:", accuracy_score(y_test, preds))
    print("Classification Report:\\n", classification_report(y_test, preds, target_names=le_y.classes_))
    print("Confusion Matrix:\\n", confusion_matrix(y_test, preds))

    with open(MODEL_OUT, 'wb') as f:
        pickle.dump({'model': model, 'features': list(X.columns), 'label_classes': list(le_y.classes_)}, f)
    with open(SCALER_OUT, 'wb') as f:
        pickle.dump(scaler, f)
    print("Saved model and scaler.")

if __name__ == '__main__':
    train()